class UserCheck {
  checkCreateUserData(user) {
    if (!user.name || !user.password || !user.fName || !user.phone) {
      console.log("Wrong user data!");
      return false;
    }
    const checkUser = this.checkUserData(user);

    if (!checkUser) return false;

    return true;
  }

  checkUpdateUserData(oldData, newData) {
    const data = this.mergeData(oldData, newData);

    if (!data) {
      console.log("No data for replace!");
      return false;
    }
    const checkUser = this.checkUserData(data);

    if (!checkUser) return false;

    return data;
  }

  checkUserData(data) {
    if (data.name.length < 4 || data.name.length > 30) {
      console.log("Wrong name length!");
      return false;
    }
    if (data.password.length < 3 || data.password.length > 30) {
      console.log("Wrong password length!");
      return false;
    }
    if (data.fName.length < 3 || data.fName.length > 30) {
      console.log("Wrong first name length!");
      return false;
    }
    if (data.phone.length !== 11) {
      console.log("Wrong phone length!");
      return false;
    }

    return true;
  }

  mergeData(oldData, newData) {
    let count = 0;

    if (!newData.name) {
      newData.name = oldData.name;
      count++;
    }
    if (!newData.password) {
      newData.password = oldData.password;
      count++;
    }
    if (!newData.fName) {
      newData.fName = oldData.f_name;
      count++;
    }
    if (!newData.phone) {
      newData.phone = oldData.phone;
      count++;
    }

    if (count === 4) return;
    else return newData;
  }
}

module.exports = new UserCheck();
