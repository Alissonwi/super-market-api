const SuperMarket = require("../models/superMarket");

class SuperMarketController { 
	
	async getSuperMarkets(req, res) {
		let superMarkets = await SuperMarket.find({});
		return res.json(superMarkets);
	}

	async addSuperMarket(req, res) {
		let superMarket = await SuperMarket.create(req.body);
		return res.json(superMarket);
	}

	async removeSuperMarket(req, res) {
		let superMarket = await SuperMarket.findByIdAndDelete(req.params.id);
		return res.json("Super market deleted");
	}

	async updateSuperMarket(req, res) {
		let superMarket = await SuperMarket.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		});
		return res.json(superMarket);
	}	
}

module.exports = new SuperMarketController();