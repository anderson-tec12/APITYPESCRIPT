import newRepository from "../repository/newRepository";

class NewService {
  async get() {
    return await newRepository.find({});
  }

  async getById(_id) {
    return await newRepository.findById(_id);
  }

  async create(news) {
    return await newRepository.create(news);
  }

  async update(_id, news) {
    return await newRepository.findByIdAndUpdate(_id, news);
  }

  async delete(_id) {
    return await newRepository.findByIdAndRemove(_id);
  }
}

export default new NewService();
