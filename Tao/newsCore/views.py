from django.shortcuts import render, get_object_or_404
from .models import Post


# Create your views here.
def homePage(request):
    posts = Post.objects.all().order_by('-postDate')
    return render(request, "index.html", {
        'posts': posts
    })


def aboutPage(request):
    title = 'Tao'
    return render(request, "about.html", {
        "title": title
    })


def postDetail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, "post-detail.html", {
        'post': post
    })
