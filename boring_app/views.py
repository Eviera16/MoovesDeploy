from django.shortcuts import render, redirect
from .models import *
from .form import ImageForm, BackForm, PostImageForm
from django.contrib import messages
import bcrypt


def index(request):
    return render(request, "index.html")


def registar(request):
    errors = User.objects.regValidator(request.POST)
    if len(errors) > 0:
        for value in errors.values():
            messages.error(request, value)
        return redirect('/')
    else:
        pw_hash = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
        new_user = User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], user_name=request.POST['user_name'], email=request.POST['email'], password=pw_hash)
        request.session['loginID'] = new_user.id
        request.session['fromReply'] = False
        new_user.fontType = 5
        new_user.fontSize = 2
        new_user.fontColor = 1
        new_user.background = 1
        new_user.privacy = 2
        new_user.save()
        return redirect('/feed')

def login(request):
    errors = User.objects.logValidator(request.POST)
    if len(errors) > 0:
        for value in errors.values():
            messages.error(request, value)
        return redirect('/')
    user_filter = User.objects.filter(user_name=request.POST['user_name'])
    request.session['loginID'] = user_filter[0].id
    request.session['fromReply'] = False
    current_user = User.objects.get(id=request.session['loginID'])
    if current_user.fontType == None:
        current_user.fontType = 5
        current_user.save()
    if current_user.fontSize == None:
        current_user.fontSize = 2
        current_user.save()
    if current_user.fontColor == None:
        current_user.fontColor = 1
        current_user.save()
    if current_user.background == None:
        current_user.background = 1
        current_user.save()
    if current_user.privacy == None:
        current_user.privacy = 2
        current_user.save()

    return redirect('/feed')


def feed(request):
    if 'loginID' not in request.session:
        messages.error(request, "You must be logged in first!")
        return redirect('/')

    request.session['passConfirm'] = False
    postss = Status.objects.all().order_by('-id')
    current_user = User.objects.get(id=request.session['loginID'])
    proImages = ProImage.objects.all()
    uUser = User.objects.get(id=1)
    allPostImages = StatusImage.objects.all()
    StatImage = StatusImage.objects.get(id=3)
    print("Status Image here: ", StatImage.image)
    form=PostImageForm()
    picId = User.objects.get(id=request.session['loginID']).proPicId
    fontType = current_user.fontType
    fontSize = current_user.fontSize
    fontColor = current_user.fontColor
    background = current_user.background
    privacy = current_user.privacy

    if picId:
        print("in here")
        CUproPic = ProImage.objects.get(id=picId)
    else:
        print("no in here")
        CUproPic = 3
    

    if request.session['fromReply'] == True:
        if request.session['isReply'] == True:
            isReply = 1
            replyPost = Status.objects.get(id=request.session['replyPost'])
            request.session['fromReply'] = False
            print("replyPost here: ", replyPost)
        else: 
            isReply = 0
            request.session['fromReply'] = False
    else:
        isReply = 0
        replyPost = 0
        request.session['isReply'] = False

    print("proImages here: ", proImages)

    print("posts here: ", postss)
    context = {
        "user" : User.objects.get(id=request.session['loginID']),
        "posts" : postss,
        "userPost" : User.objects.get(id=request.session['loginID']).post.all(),
        "friends" : User.objects.get(id=request.session['loginID']).friend.all(),
        "proImages" : proImages,
        "form" : form,
        "postPics" : allPostImages,
        "isReply" : isReply,
        "replyPost" : replyPost,
        "CUproPic" : CUproPic,
        "fontType" : fontType,
        "fontSize" : fontSize,
        "fontColor" : fontColor,
        "background" : background,
        "privacy" : privacy
    }

    return render(request, "feed.html", context)

def profile(request):
    if 'loginID' not in request.session:
        messages.error(request, "You must be logged in first!")
        return redirect('/')
    friends = User.objects.get(id=request.session['loginID']).friend.all()
    numFriends = User.objects.get(id=request.session['loginID']).friend.count()
    currentUser = User.objects.get(id=request.session['loginID'])
    all_post = currentUser.post.all().order_by('-id')
    All_Posts = Status.objects.all().order_by('-id')
    all_users = User.objects.all()
    picId = currentUser.proPicId
    picId2 = currentUser.backPicId
    proImages = ProImage.objects.all()
    allPostImages = StatusImage.objects.all()
    form=PostImageForm()
    fontType = currentUser.fontType
    fontSize = currentUser.fontSize
    fontColor = currentUser.fontColor
    background = currentUser.background
    if picId:
        print("in here")
        CUproPic = ProImage.objects.get(id=picId)
    else:
        print("no in here")
        CUproPic = 3

    if picId2:
        CUbackPic = BackImage.objects.get(id=picId2)
    else:
        CUbackPic = 3
        
    some_users = []
    some_posts = []
    count = 0
    count2 = 0
    for user in all_users:
        if user not in friends and user != currentUser:
            if count < 4:
                some_users.append({"firstName": user.first_name, "lastName": user.last_name, "userName": user.user_name, "id": user.id})
                count+=1

    for post in All_Posts:
        if post.public == True and post not in all_post:
            if count2 < 4:
                some_posts.append({"info": post.info, "poster": post.poster, "imageId": post.imageId})
                count2+=1
        elif post.poster in friends:
            if count2 < 4:
                some_posts.append({"info": post.info, "poster": post.poster, "imageId": post.imageId})
                count2+=1
    
    context = {
        "user" : User.objects.get(id=request.session['loginID']),
        "posts" : all_post,
        "cUser" : currentUser,
        "friends" : friends,
        "numFriends": numFriends,
        "allUsers" : all_users,
        "someUsers" : some_users,
        "somePosts" : some_posts,
        "CUproPic" : CUproPic,
        "proImages" : proImages,
        "CUbackPic" : CUbackPic,
        "postPics" : allPostImages,
        "form" : form,
        "fontType" : fontType,
        "fontSize" : fontSize,
        "fontColor" : fontColor,
        "background" : background
    }
    return render(request, "profile.html", context)

def profileView(request, id):
    all_post = User.objects.get(id=id).post.all().order_by('-id')
    current_user = User.objects.get(id=request.session['loginID'])
    all_friends = current_user.friend.all()
    user = User.objects.get(id=id)
    picId = user.proPicId
    CUpicId = current_user.proPicId
    picId2 = user.backPicId
    proImages = ProImage.objects.all()
    allPostImages = StatusImage.objects.all()
    friends = User.objects.get(id=request.session['loginID']).friend.all()
    form = PostImageForm()
    fontType = current_user.fontType
    fontSize = current_user.fontSize
    fontColor = current_user.fontColor
    background = current_user.background
    print("cUser fontType", fontType)
    print("cUser fontSize", fontSize)
    print("cUser fontColor", fontColor)
    print("cUser background", background)
    some_posts = []
    count2 = 0
    All_Posts = Status.objects.all().order_by('-id')

    for post in All_Posts:
        if post.public == True and post not in all_post:
            if count2 < 4:
                some_posts.append({"info": post.info, "poster": post.poster, "imageId": post.imageId})
                count2+=1
        elif post.poster in friends:
            if count2 < 4:
                some_posts.append({"info": post.info, "poster": post.poster, "imageId": post.imageId})
                count2+=1

    if CUpicId:
        CUproPic = ProImage.objects.get(id=CUpicId)
        print("in yea yea here", CUproPic)
    else:
        CUproPic = 3
        print("no yea yea in here", CUproPic)

    if picId:
        print("in here")
        UproPic = ProImage.objects.get(id=picId)
    else:
        print("no in here")
        UproPic = 3

    if picId2:
        UbackPic = BackImage.objects.get(id=picId2)
    else:
        UbackPic = 3

    context = {
        "user" : User.objects.get(id=id),
        "posts" : all_post,
        "cUser" : current_user,
        "friends" : all_friends,
        "CUproPic" : CUproPic,
        "UproPic" : UproPic,
        "UbackPic" : UbackPic,
        "postPics" : allPostImages,
        "form" : form,
        "fontType" : fontType,
        "fontSize" : fontSize,
        "fontColor" : fontColor,
        "background" : background,
        "somePosts" : some_posts
    }
    return render(request, "profile.html", context)

def add(request):
    current_user = User.objects.get(id=request.session['loginID'])
    Status.objects.create(info=request.POST['text'], poster=current_user, numMooz=0)
    return redirect('/profile')

def add1(request):
    current_user = User.objects.get(id=request.session['loginID'])
    form=PostImageForm(data=request.POST,files=request.FILES)
    if form.is_valid():
        form.save()
        obj=form.instance
        print("form is valid", obj)
        if obj.image:
            Status.objects.create(info=request.POST['text'], poster=current_user, numMooz=0, public=request.POST['public'], imageId=obj.id)
        else:
            print("in the second else statement")
            Status.objects.create(info=request.POST['text'], poster=current_user, numMooz=0, public=request.POST['public'], imageId=3)
    else:
        print("in the first else statement")
        Status.objects.create(info=request.POST['text'], poster=current_user, numMooz=0, public=request.POST['public'], imageId=3)

    return redirect('/feed')

def follow(request, id1, id2):
    user1 = User.objects.get(id=id1)
    user2 = User.objects.get(id=id2)
    user1.add_relationship(user2, 1)
    user2.add_relationship(user1, 1)
    return redirect('/feed')

def unfollow(request, id1, id2):
    user1 = User.objects.get(id=id1)
    user2 = User.objects.get(id=id2)
    user1.remove_relationship(user2, 1)
    user2.remove_relationship(user1, 1)
    return redirect('/feed')

def messages1(request):
    current_user = User.objects.get(id=request.session['loginID'])
    fontType = current_user.fontType
    fontSize = current_user.fontSize
    fontColor = current_user.fontColor
    background = current_user.background
    CUpicId = current_user.proPicId
    proImages = ProImage.objects.all()
    if CUpicId:
        CUproPic = ProImage.objects.get(id=CUpicId)
        print("in yea yea here", CUproPic)
    else:
        CUproPic = 3
        print("no yea yea in here", CUproPic)


    context = {
        "user" : current_user,
        "posts" : Status.objects.all(),
        "userPosts" : current_user.post.all(),
        "fontType" : fontType,
        "fontSize" : fontSize,
        "fontColor" : fontColor,
        "background" : background,
        "CUproPic" : CUproPic
    }
    return render(request, "messages.html", context)

def eventSubmit(request):
    current_user = User.objects.get(id=request.session['loginID'])
    Status.objects.create(info=request.POST['info'], poster=current_user, numMooz=0, public=request.POST['public'])
    return redirect('/events')

def like(request, id):
    user = User.objects.get(id=request.session['loginID'])
    post = Status.objects.get(id=id)
    if user not in post.mooz.all():
        post.mooz.add(user)
        post.numMooz = post.numMooz + 1
        post.save()
        return redirect('/feed')
    return redirect('/feed')

def logout(request):
    request.session['loginID'] = None
    print(request.session['loginID'])
    return redirect('/')

def settings(request):
    current_user = User.objects.get(id=request.session['loginID'])
    print("current user: ", current_user)
    confirmPass = request.session['passConfirm']
    fontType = current_user.fontType
    fontSize = current_user.fontSize
    fontColor = current_user.fontColor
    background = current_user.background
    privacy = current_user.privacy
    picId = User.objects.get(id=request.session['loginID']).proPicId

    print("fontType here: ", fontType)
    print("fontSize here: ", fontSize)
    print("fontColor here: ", fontColor)
    print("background here: ", background)

    if picId:
        print("in here")
        CUproPic = ProImage.objects.get(id=picId)
    else:
        print("no in here")
        CUproPic = 3
    print("confirmPass here: ", confirmPass)
    print("hellooooooo")
    context = {
        "user" : current_user,
        "confirmPass" : confirmPass,
        "fontType" : fontType,
        "fontSize" : fontSize,
        "fontColor" : fontColor,
        "background" : background,
        "CUproPic" : CUproPic,
        "privacy" : privacy
    }
    return render(request, "settings.html", context)

def viewAcc(request):
    return render(request, "viewAcc.html", context)

def editPass(request):
    current_user = User.objects.get(id=request.session['loginID'])
    context = {
        "user" : current_user
    }
    return render(request, "editPass.html", context)

def passEdit(request):
    errors = User.objects.passValidator(request.POST)
    if len(errors) > 0:
        for value in errors.values():
            messages.error(request, value)
            print(messages.error(request, value))
        return redirect('/settings')
    request.session['passConfirm'] = True
    return redirect('/settings')

def newPass(request):
    current_user = User.objects.get(id=request.session['loginID'])
    context = {
        "user" : current_user
    }
    return render(request, "newPass.html", context)

def updatePass(request):
    errors = User.objects.newPassValidator(request.POST)
    if len(errors) > 0:
        for value in errors.values():
            messages.error(request, value)
        return redirect('/settings')
    current_user = User.objects.get(id=request.session['loginID'])
    pw_hash = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
    current_user.password = pw_hash
    current_user.save()
    request.session['passConfirm'] = False
    return redirect('/settings')

def reply(request):
    current_user = User.objects.get(id=request.session['loginID'])
    post = Status.objects.get(id=request.POST['postId'])
    form=PostImageForm(data=request.POST,files=request.FILES)
    if form.is_valid():
        form.save()
        obj=form.instance
        print("form is valid", obj)
        if obj.image:
            Reply.objects.create(info=request.POST['text'], poster=current_user, numReMooz=0, repliedTo=post, imageId=obj.id)
        else:
            print("in the second else statement")
            Reply.objects.create(info=request.POST['text'], poster=current_user, numReMooz=0, repliedTo=post, imageId=3)
    else:
        print("in the first else statement")
        Reply.objects.create(info=request.POST['text'], poster=current_user, numReMooz=0, repliedTo=post, imageId=3)
    
    request.session['isReply'] = True
    request.session['replyPost'] = post.id
    request.session['fromReply'] = True

    return redirect('/feed')

def updatePro(request):
    friends = User.objects.get(id=request.session['loginID']).friend.all()
    numFriends = User.objects.get(id=request.session['loginID']).friend.count()
    currentUser = User.objects.get(id=request.session['loginID'])
    all_users = User.objects.all()
    picId = currentUser.proPicId
    picId2 = currentUser.backPicId
    proImages = ProImage.objects.all()
    fontType = currentUser.fontType
    fontSize = currentUser.fontSize
    fontColor = currentUser.fontColor
    background = currentUser.background
    if picId:
        print("in here")
        CUproPic = ProImage.objects.get(id=picId)
    else:
        print("no in here")
        CUproPic = 3

    if picId2:
        CUbackPic = BackImage.objects.get(id=picId2)
    else:
        CUbackPic = 3

    some_users = []
    some_posts = []
    count = 0
    count2 = 0
    for user in all_users:
        if user not in friends and user != currentUser:
            if count < 4:
                some_users.append({"firstName": user.first_name, "lastName": user.last_name, "userName": user.user_name, "id": user.id})
                count+=1
    
    context = {
        "user" : User.objects.get(id=request.session['loginID']),
        "cUser" : currentUser,
        "friends" : friends,
        "numFriends": numFriends,
        "allUsers" : all_users,
        "CUProPic" : CUproPic,
        "proImages" : proImages,
        "CUbackPic" : CUbackPic,
        "fontType" : fontType,
        "fontSize" : fontSize,
        "fontColor" : fontColor,
        "background" : background
    }
    return render(request, "updatePro.html", context)


def updateProPic(request):
    current_user = User.objects.get(id=request.session['loginID'])
    if request.method == "POST":
        print("it is a post request")
        form=ImageForm(data=request.POST,files=request.FILES)
        if form.is_valid():
            print("the form is valid")
            form.save()
            obj=form.instance
            friends = User.objects.get(id=request.session['loginID']).friend.all()
            numFriends = User.objects.get(id=request.session['loginID']).friend.count()
            currentUser = User.objects.get(id=request.session['loginID'])
            all_post = currentUser.post.all().order_by('-id')
            All_Posts = Status.objects.all().order_by('-id')
            all_users = User.objects.all()
            picId = currentUser.proPicId
            picId2 = currentUser.backPicId
            proImages = ProImage.objects.all()
            fontType = currentUser.fontType
            fontSize = currentUser.fontSize
            fontColor = currentUser.fontColor
            background = currentUser.background
            if picId:
                CUproPic = ProImage.objects.get(id=picId)
                print("in here: ", CUproPic)
            else:
                print("no in here")
                CUproPic = 3

            if picId2:
                CUbackPic = BackImage.objects.get(id=picId2)
            else:
                CUbackPic = 3

            some_users = []
            some_posts = []
            count = 0
            count2 = 0
            for user in all_users:
                if user not in friends and user != currentUser:
                    if count < 4:
                        some_users.append({"firstName": user.first_name, "lastName": user.last_name, "userName": user.user_name, "id": user.id})
                        count+=1

            for post in All_Posts:
                if post.public == True and post not in all_post:
                    if count2 < 4:
                        some_posts.append({"info": post.info, "poster": post.poster})
                        count2+=1
                elif post.poster in friends:
                    if count2 < 4:
                        some_posts.append({"info": post.info, "poster": post.poster})
                        count2+=1
    
            context = {
                "user" : User.objects.get(id=request.session['loginID']),
                "posts" : all_post,
                "cUser" : currentUser,
                "friends" : friends,
                "numFriends": numFriends,
                "allUsers" : all_users,
                "someUsers" : some_users,
                "somePosts" : some_posts,
                "CUProPic" : CUproPic,
                "CUbackPic" : CUbackPic,
                "fontType" : fontType,
                "fontSize" : fontSize,
                "fontColor" : fontColor,
                "background" : background
            }
            current_user.proPicId = obj.id
            current_user.save()
            print("obj id here: ", obj.id)
            print("proPicId here: ", current_user.proPicId)
            
            print("obj here: ", obj)
            return render(request,"profile.html",{"obj":obj}, context)  
    else:
        print("the form is not valid")
        form=ImageForm() 
        user = User.objects.get(id=request.session['loginID'])
        numFriends = User.objects.get(id=request.session['loginID']).friend.count()
        picId = user.proPicId
        proImages = ProImage.objects.all()
        fontType = user.fontType
        fontSize = user.fontSize
        fontColor = user.fontColor
        background = user.background
        if picId:
            CUproPic = ProImage.objects.get(id=picId)
            print("in here: ", CUproPic)
        else:
            print("no in here")
            CUproPic = 3
        print("form here: ", form)
        return render(request,"editProPic.html", {"form":form, "CUProPic":CUproPic, "cUser":user, "user":user, "numFriends":numFriends, "fontType":fontType, "fontSize":fontSize, "fontColor":fontColor, "background":background})

def updateProDesc(request):
    current_user = User.objects.get(id=request.session['loginID'])
    if len(request.POST['first_name']) < 1:
        current_user.first_name = current_user.first_name
    else:
        current_user.first_name = request.POST['first_name']
    if len(request.POST['last_name']) < 1:
        current_user.last_name = current_user.last_name
    else:
        current_user.last_name = request.POST['last_name']
    if len(request.POST['user_name']) < 1:
        current_user.user_name = current_user.user_name
    else:
        current_user.user_name = request.POST['user_name']
    if len(request.POST['desc']) < 1:
        current_user.desc = current_user.desc
    else:
        current_user.desc = request.POST['desc']
    current_user.save()
    return redirect('/profile')

def updateBackPic(request):
    current_user = User.objects.get(id=request.session['loginID'])
    if request.method == "POST":
        print("it is a post request")
        form=BackForm(data=request.POST,files=request.FILES)
        if form.is_valid():
            print("the form is valid")
            form.save()
            obj1=form.instance
            friends = User.objects.get(id=request.session['loginID']).friend.all()
            numFriends = User.objects.get(id=request.session['loginID']).friend.count()
            currentUser = User.objects.get(id=request.session['loginID'])
            all_post = currentUser.post.all().order_by('-id')
            All_Posts = Status.objects.all().order_by('-id')
            all_users = User.objects.all()
            picId = currentUser.backPicId
            picId2 = currentUser.proPicId
            backImages = BackImage.objects.all()
            fontType = currentUser.fontType
            fontSize = currentUser.fontSize
            fontColor = currentUser.fontColor
            background = currentUser.background
            if picId:
                CUbackPic = BackImage.objects.get(id=picId)
                print("in here: ", CUproPic)
            else:
                print("no in here")
                CUbackPic = 3

            if picId2:
                CUproPic = ProImage.objects.get(id=picId2)
            else:
                CUproPic = 3

            some_users = []
            some_posts = []
            count = 0
            count2 = 0
            for user in all_users:
                if user not in friends and user != currentUser:
                    if count < 4:
                        some_users.append({"firstName": user.first_name, "lastName": user.last_name, "userName": user.user_name, "id": user.id})
                        count+=1

            for post in All_Posts:
                if post.public == True and post not in all_post:
                    if count2 < 4:
                        some_posts.append({"info": post.info, "poster": post.poster})
                        count2+=1
                elif post.poster in friends:
                    if count2 < 4:
                        some_posts.append({"info": post.info, "poster": post.poster})
                        count2+=1
    
            context = {
                "user" : User.objects.get(id=request.session['loginID']),
                "posts" : all_post,
                "cUser" : currentUser,
                "friends" : friends,
                "numFriends": numFriends,
                "allUsers" : all_users,
                "someUsers" : some_users,
                "somePosts" : some_posts,
                "CUbackPic" : CUbackPic,
                "CUproPic" : CUproPic,
                "fontType" : fontType,
                "fontSize" : fontSize,
                "fontColor" : fontColor,
                "background" : background
            }
            current_user.backPicId = obj1.id
            current_user.save()
            print("obj id here: ", obj1.id)
            print("backPicId here: ", current_user.backPicId)
            
            print("obj here: ", obj)
            return render(request,"profile.html",{"obj1":obj1}, context)  
    else:
        print("the form is not valid")
        form=ImageForm() 
        user = User.objects.get(id=request.session['loginID'])
        numFriends = User.objects.get(id=request.session['loginID']).friend.count()
        picId = user.backPicId
        picId2 = user.proPicId
        backImages = BackImage.objects.all()
        fontType = user.fontType
        fontSize = user.fontSize
        fontColor = user.fontColor
        background = user.background
        print("fontColor here: ", fontColor)
        if picId:
            CUbackPic = BackImage.objects.get(id=picId)
            print("in here: ", CUbackPic)
        else:
            print("no in here")
            CUbackPic = 3

        if picId2:
            CUproPic = ProImage.objects.get(id=picId2)
        else:
            CUproPic = 3

        print("form here: ", form)
        return render(request,"editBackPic.html", {"form":form, "CUbackPic":CUbackPic, "cUser":user, "user":user, "numFriends":numFriends, "fontType":fontType, "fontSize":fontSize, "fontColor":fontColor, "background":background, "CUProPic":CUproPic})

def fontType(request, num):
    current_user = User.objects.get(id=request.session['loginID'])
    fontType = num
    # if fontType == 1:
    #     request.session['fontType'] = 1
    # elif fontType == 2:
    #     request.session['fontType'] = 2
    # elif fontType == 3:
    #     request.session['fontType'] = 3
    # elif fontType == 4:
    #     request.session['fontType'] = 4
    # elif fontType == 5:
    #     request.session['fontType'] = 5
    # elif fontType == 6:
    #     request.session['fontType'] = 6

    print("in FontType def: ", fontType)
    print("current_user.fontType before: ", current_user.fontType)

    current_user.fontType = fontType
    current_user.save()

    print("current_user.fontType after: ", current_user.fontType)

    # print("fontType here: ", request.session['fontType'])
    return redirect('/settings')

def fontSize(request, num):
    current_user = User.objects.get(id=request.session['loginID'])
    fontSize = num
    # if fontSize == 1:
    #     request.session['fontSize'] = 1
    # elif fontSize == 2:
    #     request.session['fontSize'] = 2
    # elif fontSize == 3:
    #     request.session['fontSize'] = 3

    current_user.fontSize = fontSize
    current_user.save()

    return redirect('/settings')
    
def fontColor(request, num):
    current_user = User.objects.get(id=request.session['loginID'])
    fontColor = num
    # if fontColor == 1:
    #     request.session['fontColor'] = 1
    # elif fontColor == 2:
    #     request.session['fontColor'] = 2
    # elif fontColor == 3:
    #     request.session['fontColor'] = 3
    # elif fontColor == 4:
    #     request.session['fontColor'] = 4
    # elif fontColor == 5:
    #     request.session['fontColor'] = 5
    # elif fontColor == 6:
    #     request.session['fontColor'] = 6
    # elif fontColor == 7:
    #     request.session['fontColor'] = 7
    
    current_user.fontColor = fontColor
    current_user.save()

    return redirect('/settings')

def background(request, num):
    current_user = User.objects.get(id=request.session['loginID'])
    background = num
    # if background == 1:
    #     request.session['background'] = 1
    # else:
    #     request.session['background'] = 2

    current_user.background = background
    current_user.save()

    return redirect('/settings')

def privacy(request, num):
    current_user = User.objects.get(id=request.session['loginID'])
    privacy = num
    current_user.privacy = privacy
    current_user.save()

    return redirect('/settings')
    
