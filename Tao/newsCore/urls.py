from django.urls import path
from . import views

urlpatterns = [
    path('', views.homePage, name='homePage'),
    path('about/', views.aboutPage, name='aboutPage'),
    path('post/<int:pk>/', views.postDetail, name='postDetail')
]
