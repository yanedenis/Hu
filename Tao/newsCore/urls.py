from django.urls import path
from . import views

urlpatterns = [
    path('', views.homePage, name='homePage'),
    path('about/', views.aboutPage, name='aboutPage'),
    path('news/post/<int:pk>/', views.postDetail, name='postDetail'),
    path('news/delete-post/<int:pk>/', views.deletePost, name='deletePost'),
    path('news/edit-post/<int:pk>/', views.editPost, name='editPost'),
    path('news/all/', views.allNews, name='allNews'),
    path('news/add/', views.addPost, name='addPost'),
]
