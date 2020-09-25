const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

console.log(Object.keys(users))
function isUseMERN(data){
    let keyOfdata
}
  function isUserMERN(data) {
      const keyOfData = Object.keys(data)
      const MERNUser = []
      const NotMERNUser =[]
      for (let i = 0; i < keyOfData.length; i++){
        let mayCoPhaiLaMERN = data[keyOfData[i]]['skills'].includes('MongoDB') && data[keyOfData[i]]['skills'].includes('Express') && data[keyOfData[i]]['skills'].includes('React') && data[keyOfData[i]]['skills'].includes('Node') 
        if (mayCoPhaiLaMERN) {
            MERNUser.push(keyOfData[i])
        } else {
            NotMERNUser.push(keyOfData[i])
        }
      }
      return {MERN: MERNUser, NotMERN: NotMERNUser}
  }

  console.log(isUserMERN(users))
 
  