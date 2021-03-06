const app = require('../src/app')
const request = require('supertest')

describe('Users endpoints', () => {
  it('post request to /users should create a user', async () => {
    const userToCreate = {
      name: 'SomeName' + Date.now(),
      age: 27,
      bio: 'Been There. Done That.',
    }

    const createdUser = (await request(app).post('/users').send(userToCreate)).body
    expect(createdUser.name).toBe(userToCreate.name)
    expect(createdUser.age).toBe(userToCreate.age)
    expect(createdUser.bio).toBe(userToCreate.bio)
  })

  it('get request to /users should list users', async () => {
    const userList = (await request(app).get('/users')).body
    const usersExist = userList.length > 0

    expect(usersExist).toBe(true)
  })

  it('user should be able to like a photo', async () => {
    // create a photo
    const photo = (await request(app).post('/photos').send({ filename: 'coyotivtestingsession.png' })).body
    console.log('-------------photo--', photo)

    // create a user
    const userWithPhoto = (
      await request(app)
        .post('/users')
        .send({
          name: 'PhotoOwnerUser' + Date.now(),
          age: 27,
          bio: 'Someone sharing photos.',
        })
    ).body
    console.log('-------------userWithPhoto--', userWithPhoto)

    // add the photo to that user
    await request(app).post(`/users/${userWithPhoto._id}/adds`).send({ photoId: photo._id })

    // create another user
    const likerUser = {
      name: 'Liker User' + Date.now(),
      age: 36,
      bio: 'Someone liking photos.',
    }

    const createdLikerUser = (await request(app).post('/users').send(likerUser)).body
    console.log('-------------createdLikerUser--', createdLikerUser)

    // like the photo with that another user
    await request(app).post(`/users/${createdLikerUser._id}/likes`).send({ photoId: photo._id })

    const finalPhotoUser = (await request(app).get(`/users/${userWithPhoto._id}/json`)).body
    console.log('-------------finalPhotoUser--', finalPhotoUser)

    const finalLikerUser = (await request(app).get(`/users/${createdLikerUser._id}/json`)).body
    console.log('-------------finalLikerUser--', finalLikerUser)

    expect(finalPhotoUser.photos.length).toBe(1)
    expect(finalLikerUser.likes.length).toBe(1)

    console.log('finalPhotoUser.photos[0].likedBy[0]._id', finalPhotoUser.photos[0].likedBy[0]._id)

    expect(finalPhotoUser.photos[0].likedBy[0]._id).toBe(finalLikerUser._id)
    expect(finalLikerUser.likes[0]).toBe(finalPhotoUser.photos[0]._id)
  })
})
