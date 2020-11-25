from django.shortcuts import render, redirect
from .models import *
from .form import ImageForm
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
        return redirect('/feed')

def login(request):
    errors = User.objects.logValidator(request.POST)
    if len(errors) > 0:
        for value in errors.values():
            messages.error(request, value)
        return redirect('/')
    user_filter = User.objects.filter(user_name=request.POST['user_name'])
    request.session['loginID'] = user_filter[0].id
    return redirect('/feed')


def feed(request):
    if 'loginID' not in request.session:
        messages.error(request, "You must be logged in first!")
        return redirect('/')

    postss = Status.objects.all().order_by('-id')
    proImages = ProImage.objects.all()
    uUser = User.objects.get(id=1)

    print("proImages here: ", proImages)

    print("posts here: ", postss)
    context = {
        "user" : User.objects.get(id=request.session['loginID']),
        "posts" : postss,
        "userPost" : User.objects.get(id=request.session['loginID']).post.all(),
        "friends" : User.objects.get(id=request.session['loginID']).friend.all(),
        "proImages" : proImages
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
    proImages = ProImage.objects.all()
    if picId:
        print("in here")
        CUproPic = ProImage.objects.get(id=picId)
    else:
        print("no in here")
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
        "CUproPic" : CUproPic,
        "proImages" : proImages
    }
    return render(request, "profile.html", context)

def profileView(request, id):
    all_post = User.objects.get(id=id).post.all()
    current_user = User.objects.get(id=request.session['loginID'])
    all_friends = current_user.friend.all()
    context = {
        "user" : User.objects.get(id=id),
        "posts" : all_post,
        "cUser" : current_user,
        "friends" : all_friends
    }
    return render(request, "profile.html", context)

def add(request):
    current_user = User.objects.get(id=request.session['loginID'])
    Status.objects.create(info=request.POST['text'], poster=current_user, numMooz=0)
    return redirect('/profile')

def add1(request):
    current_user = User.objects.get(id=request.session['loginID'])
    Status.objects.create(info=request.POST['text'], poster=current_user, numMooz=0, public=request.POST['public'])
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

def events(request):
    current_user = User.objects.get(id=request.session['loginID'])
    context = {
        "user" : current_user,
        "posts" : Status.objects.all(),
        "userPosts" : current_user.post.all()
    }
    return render(request, "events.html", context)

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

    return render(request, "settings.html")

def viewAcc(request):
    current_user = User.objects.get(id=request.session['loginID'])
    print("current user: ", current_user)
    context = {
        "user" : current_user
    }
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
        return redirect('/editPass')
    return redirect('/newPass')

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
        return redirect('/newPass')
    current_user = User.objects.get(id=request.session['loginID'])
    pw_hash = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
    current_user.password = pw_hash
    current_user.save()
    return redirect('/editPass')

def reply(request):
    current_user = User.objects.get(id=request.session['loginID'])
    post = Status.objects.get(id=request.POST['postId'])
    Reply.objects.create(info=request.POST['text'], poster=current_user, numReMooz=0, repliedTo=post)
    return redirect('/feed')

def editPro(request):
    current_user = User.objects.get(id=request.session['loginID'])
    numFriends = User.objects.get(id=request.session['loginID']).friend.count()
    
    if current_user.proImage:
        print("It exists!!!")
        print(current_user.proImage.url)
    else:
        print("It doesn't exists!!!")

    context = {
        "user" : current_user,
        "numFriends" : numFriends
    }

    return render (request, "editPro.html", context)

def updatePro(request):
    current_user = User.objects.get(id=request.session['loginID'])
    if request.method == "POST":
        form=ImageForm(data=request.POST,files=request.FILES)
        if form.is_valid():
            form.save()
            obj=form.instance
            current_user.proPicId = obj.id
            current_user.save()
            print("obj id here: ", obj.id)
            print("proPicId here: ", current_user.proPicId)
            friends = User.objects.get(id=request.session['loginID']).friend.all()
            numFriends = User.objects.get(id=request.session['loginID']).friend.count()
            currentUser = User.objects.get(id=request.session['loginID'])
            all_post = currentUser.post.all().order_by('-id')
            All_Posts = Status.objects.all().order_by('-id')
            all_users = User.objects.all()
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
                "somePosts" : some_posts
            }
            print("obj here: ", obj)
            return render(request,"profile.html",{"obj":obj}, context)  
    else:
        form=ImageForm()    
        return render(request,"editPro.html",{"form":form})



    # current_user = User.objects.get(id=request.session['loginID'])
    # current_user.first_name = request.POST['firstName']
    # current_user.last_name = request.POST['lastName']
    # current_user.desc = request.POST['desc']
    # current_user.save()
    # return redirect('/profile')