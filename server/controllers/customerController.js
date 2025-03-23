import Customer from '../models/Customer.Model.js'
/**--------------------------------
 * @desc get all customers
 * @router /api/users/
 * @method get
 * @access private (only admin)
---------------------------------*/
const getCustomers = async (req,res) =>{
    try {
        const customers = await Customer.find()
        res.status(200).json(customers)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

/**--------------------------------
 * @desc get single customer
 * @router /api/users/:id
 * @method get
 * @access private (only admin)
---------------------------------*/
const getCustomer = async (req,res) =>{
    const id = req.params.id
    try {
        const customer = await Customer.findById(id)
        if(!customer) return res.status(404).json({message:"Customer not found"})
        res.status(200).json(customer)
    }
    catch (error) {
        res.status(500).json({message:error.message})
    }
}

/**--------------------------------
 * @desc add customer
 * @router /api/users/
 * @method post
 * @access private (only admin)
---------------------------------*/
const addCustomer = async (req,res) =>{
    const {firstName,lastName,email,phone,address,city,state,zip} = req.body;
    
    try {
        const customer = new Customer({
            firstName,
            email,
            phone,
            address,
            lastName,
            city,
            state,
            zip,
        })
        await customer.save()
        res.status(200).json({message:"Customer added successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

/**--------------------------------
 * @desc update customer
 * @router /api/users/:id
 * @method put
 * @access private (only admin)
---------------------------------*/
const updateCustomer = async (req,res) =>{
    const id = req.params.id
    const {firstName,lastName,email,phone,address,city,state,zip} = req.body;
    try {
        await Customer
.findByIdAndUpdate(id,{firstName,lastName,email,phone,address,city,state,zip})
        res.status(200).json({message:"Customer updated successfully",firstName,lastName,email,phone,address,city,state,zip})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


export {getCustomers,getCustomer,addCustomer,updateCustomer}