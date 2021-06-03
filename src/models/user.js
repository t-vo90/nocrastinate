class User {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.bio = ''
    this.photos = []
    this.likes = []
  }

  addPhoto(photo) {
    this.photos.push(photo.filename)
  }

  likePhoto(photo) {
    this.likes.push(photo.filename)
    photo.likedBy.push(this.name)
  }
}

module.exports = User
