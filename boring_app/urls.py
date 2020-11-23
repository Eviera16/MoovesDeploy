from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns = [
        path('', views.index),
        path('feed', views.feed),
        path('registar', views.registar),
        path('login', views.login),
        path('profile', views.profile),
        path('profile/<int:id>', views.profileView),
        path('add', views.add),
        path('add1', views.add1),
        path('follow/<int:id1>/<int:id2>', views.follow),
        path('unfollow/<int:id1>/<int:id2>', views.unfollow),
        path('events', views.events),
        path('event/submit', views.eventSubmit),
        path('like/<int:id>', views.like),
        path('logout', views.logout),
        path('settings', views.settings),
        path('viewAcc', views.viewAcc),
        path('editPass', views.editPass),
        path('passEdit', views.passEdit),
        path('newPass', views.newPass),
        path('updatePass', views.updatePass),
        path('reply', views.reply),
        path('editPro', views.editPro),
        path('updatePro', views.updatePro)
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)