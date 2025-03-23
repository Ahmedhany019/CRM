import Deal from "../models/Deals.Model.js";

/**--------------------------------
 * @desc get all deals
 * @router /api/deals/
 * @method get
 * @access private (only admin)
---------------------------------*/

const getDeals = async (req, res) => {
  try {
    const deals = await Deal.find({});
    res.json(deals);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: error});
  }
};

/**--------------------------------
 * @desc create deal
 * @router /api/deals/add
 * @method get
 * @access private (only admin)
---------------------------------*/

const createDeal = async (req, res) => {
  try {
    const deal = new Deal(req.body);
    await deal.save();
    res.json({message: "Deal created successfully"});
  } catch (error) {
    console.error(error);
    res.status(500).json({message: error});
  }
};






export { getDeals,createDeal };

