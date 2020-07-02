import newRepository from "../repository/newRepository";

class NewService {
  get() {
    return newRepository.find({});
  }

  getById(_id) {
    return newRepository.findById(_id);
  }
}

export default new NewService();
