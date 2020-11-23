from django.db import models
import bcrypt

class UserManager(models.Manager):
    def regValidator(self, postData):
        user_filter = User.objects.filter(user_name=postData['user_name'])
        errors = {}
        if len(postData['first_name']) == 0:
            errors['first_name'] = "First Name is required!"
        elif len(postData['first_name']) < 3:
            errors['first_name'] = "First Name must be at least 3 characters long!"
        if len(postData['last_name']) == 0:
            errors['last_name'] = "Last name is required!"
        elif len(postData['last_name']) < 3:
            errors['last_name'] = "Last name must be at least 3 character long!"
        if len(postData['user_name']) == 0:
            errors['user_name'] = "User name is required!"
        elif len(postData['user_name']) < 4:
            errors['username'] = "User name must be at least 4 characters long!"
        elif len(user_filter) > 0:
            errors['user_name'] = "User name already taken!"
        if len(postData['email']) == 0:
            errors['email'] = "Email is required!"
        elif len(postData['email']) < 10:
            errors['email'] = "Email must be at least 10 characters long!"
        if len(postData['password']) == 0:
            errors['password'] = "Password is required!"
        elif len(postData['password']) < 4:
            errors['password'] = "Password must be at least 4 characters long!"
        elif postData['confirm'] != postData['password']:
            errors['password'] = "Passwords must match!"
        return errors
    def logValidator(self, postData):
        user_filter = User.objects.filter(user_name=postData['user_name'])
        errors = {}
        if len(postData['user_name']) == 0:
            errors['user_name'] = "User name is required!"
        elif len(postData['user_name']) < 4:
            errors['user_name'] = "User name must be at least 4 characters long!"
        elif len(user_filter) < 0:
            errors['user_name'] = "User name not found. Make sure you registar!"
        if len(postData['password']) == 0:
            errors['password'] = "Password is required!"
        elif len(postData['password']) < 4:
            errors['password'] = "Password must be at least 4 characters long!"
        elif bcrypt.checkpw(postData['password'].encode(), user_filter[0].password.encode()):
            print("***************")
            print("Password Matches!!!")
        else:
            errors['password'] = "Password is incorrect!"
        return errors

    def passValidator(self, postData):
        user_filter = User.objects.filter(user_name=postData['user_name'])
        errors = {}
        if len(postData['password']) == 0:
            errors['password'] = "Password is required!"
        elif len(postData['password']) < 4:
            errors['password'] = "Password must be at least 4 characters long!"
        elif bcrypt.checkpw(postData['password'].encode(), user_filter[0].password.encode()):
            print("***************")
            print("Password Matches!!!")
        else:
            errors['password'] = "Password is incorrect!"
        return errors

    def newPassValidator(self, postData):
        user_filter = User.objects.filter(user_name=postData['user_name'])
        errors = {}
        if len(postData['password']) == 0:
            errors['password'] = "Password is required!"
        elif len(postData['password']) < 4:
            errors['password'] = "Password must be at least 4 characters long!"
        elif postData['confirm'] != postData['password']:
            errors['password'] = "Passwords must match!"
        return errors



class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    user_name = models.CharField(max_length=255, default=None)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    friend = models.ManyToManyField('self', through='Relationship', symmetrical=False, related_name="related_to")
    proImage = models.ImageField(upload_to='profile_image', blank=True)
    desc = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

    def __unicode__(self):
        return self.name

    def add_relationship(self, user, status):
        relationship, created = Relationship.objects.get_or_create(
            from_user=self,
            to_user=user,
            status=status
            )
        return relationship

    def remove_relationship(self, user, status):
        Relationship.objects.filter(
            from_user=self,
            to_user=user,
            status=status
        ).delete()
        return 


RELATIONSHIP_FOLLOWING = 1
RELATIONSHIP_UNFOLLOWED = 2
RELATIONSHIP_STATUSES = (
    (RELATIONSHIP_FOLLOWING, 'Following'),
    (RELATIONSHIP_UNFOLLOWED, 'Unfollowed')
)


class Relationship(models.Model):
    from_user = models.ForeignKey(User, related_name="from_users", on_delete=models.CASCADE)
    to_user = models.ForeignKey(User, related_name="to_users", on_delete=models.CASCADE)
    status = models.IntegerField(choices=RELATIONSHIP_STATUSES)

class Status(models.Model):
    info = models.TextField()
    poster = models.ForeignKey(User, related_name="post", on_delete=models.CASCADE)
    mooz = models.ManyToManyField(User, related_name="mooz")
    numMooz = models.IntegerField(0)
    public = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Reply(models.Model):
    info = models.TextField()
    poster = models.ForeignKey(User, related_name="reply", on_delete=models.CASCADE)
    Remooz = models.ManyToManyField(User, related_name="Replymooz")
    numReMooz = models.IntegerField(0)
    repliedTo = models.ForeignKey(Status, related_name="replies", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
