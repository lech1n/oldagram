const posts = [
{
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 995
},
{
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 10234
},
{
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 1520
},{
    name: "Mona Lisa",
    username: "mona123",
    location: "Florence, Italy",
    avatar: "images/monalisa.jpg",
    post: "images/monalisa.jpg",
    comment: "felt cute might delete later",
    likes: 99345
}
]

const content = document.getElementById("content")


let renderedContent=""


for(let i=0 ; i < posts.length; i++){
    renderedContent += `
    <div class="post-header">
    <img src="${posts[i].avatar}" class="profile-pic" alt="profile-pic">
    <div>
    <span class="span bold small">${posts[i].name}</span>
    <span class="span small">${posts[i].location}</span>
    </div>
    </div> 
    <div class="photo-container">
    <img src="${posts[i].post}" class="post"> 
    </div>
    <div class="icon-container">
    <img id = "heart-icon" class="icon" src="images/icon-heart.png">
    <img class="icon"  src="images/icon-comment.png">
    <img class="icon" src="images/icon-dm.png">
    </div>
    <div class="likes bold">
    <span id="likes" class="bold">${posts[i].likes} likes </span> 
    </div>
    <div class="caption">
    <span><span class="bold">${posts[i].username} </span> <span>${posts[i].comment}</span></span>
    </div>
    <div class="space"> </div>
    `

}


content.innerHTML = renderedContent



