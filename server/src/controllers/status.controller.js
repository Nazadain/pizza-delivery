const StatusService = require("../services/status.service");

class StatusController {
  async createStatus(req, res) {
    try {
      const newStatus = await StatusService.createStatus(req.body);
      res.json(newStatus);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Create status error" });
    }
  }

  async getStatuses(req, res) {
    try {
      const statuses = await StatusService.getStatuses();
      res.json(statuses);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Get statuses error" });
    }
  }

  async getStatusById(req, res) {
    try {
      const status = await StatusService.getStatusById(req.params.id);
      res.json(status);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Get status by ID error" });
    }
  }

  async deleteStatus(req, res) {
    try {
      await StatusService.deleteStatus(req.params.id);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Delete status error" });
    }
  }
}

module.exports = new StatusController();
