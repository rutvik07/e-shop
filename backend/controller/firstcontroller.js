import User from '../model/user.model'
import Product from '../model/product.model'
import Category from '../model/category.model'
import multer from 'multer';


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,'images')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
})


export const testControllerMethod = async function(req, res) {
    res.send('Controller-Method-Running');
}

export const adduser = async function(req, res) {
    
    let userData = await User.insertMany([{name:"Rutvik",email:"rutvik@gmail.com",password:"rutvik@07"},
                                    {name:"Jaydeep",email:"jaydeep@gmail.com",password:"jaydeep@07"},
                                    {name:"Krutik",email:"krutik@gmail.com",password:"krutik@07",product:"6130decc7f9bc63d8f00fcef"}])
            
    return res.status(200).json({
    data:userData,
    message: "User Added",
    status: true
    });
}

export const addproduct = async function(req, res) {

    let proData = await Product.insertMany([{name:"Oneplus",description:"Mobile",price:"25000",quantity:"9"},
                                            {name:"Levis",description:"Men Jeans",price:"4999",quantity:"11"},
                                            {name:"Asus Rog",description:"Laptop",price:"42999",quantity:"4"},
                                            {name:"Red Gear",description:"Joystick",price:"1299",quantity:"8"}])
     return res.status(200).json({
     data:proData,
     message: "Product Added",
     status: true
    });
}

export const userwithproduct = async function(req, res) {
    let userInfos = await User.aggregate([{
        "$lookup":{
            "from":"products",
            "localField":"product",
            "foreignField":"_id",
            "as":"userproducts"
        }
    }])
         return res.status(200).json({
        data:userInfos,
        message: "User With Products",
        status: true
       });
}

export const listallusers = async function(req, res) {
    let userList = await User.find({}).populate('product')

        return res.status(200).json({
        data:userList,
        message: "List of users",
        status: true
       });
}

export const pricerange = async function(req, res) {
    let productInfo = await Product.find({'price':{$gt : 20000}})

        return res.status(200).json({
        data:productInfo,
        message: "Price Range",
        status: true
       });
}

export const serverrendering = async function(req, res) {
    res.sendFile(__dirname + '/shoppingcart.html')
}

export const serverform = async function(req, res) {
    res.sendFile(__dirname + '/form.html')
}

export const add_data_from_user = async function(req, res) {
    
    const {name,email,password} = req.body;

    let userData =  await new User({name: name, email: email, password: password});
    userData.save();
    return res.status(200).json({
        data:userData,
        message: "User Saved",
        status: true
    })
}

export const serverproduct = async function(req, res) {
    res.sendFile(__dirname + '/product.html')
}

export const add_product_data_from_user = async function(req, res) {

    const uploadImages = multer({storage:storage}).single('avatar');
        uploadImages(req,res,async function(err)
        {
            console.log(req.file,req.body);
            const filename = req.file.filename;
            const {name,description,category,price,quantity} = req.body;
            let proData = await new Product({name:name,description:description,category:category,price:price,quantity:quantity,file:filename})
            proData.save();
            return res.status(200).json({
                data:proData,
                message: "Products Added",
                status: true
            })
        })
}


export const addcategory = async function(req, res) {
    
    // let catData = await Category.insertMany([{name:"Men",as:"Mens"},{name:"Women",as:"Womens"},{name:"Kid",as:"Kids"}])
    const {name,as} = req.body;
    let catData = await new Category({name:name,as:as})
    catData.save();
    return res.status(200).json({
    data:catData,
    message: "Categories Added",
    status: true
    });
}

export const server_category = async function(req, res) {
    res.sendFile(__dirname + '/category.html');
}


export const get_category = async function(req, res) {
    let catList = await Category.find({});

    return res.status(200).json({
    data:catList,
    message: "List of categories",
    status: true
   });   
}

export const show_products = async function(req, res) {
    const {category} = req.body;
    let proList = await Product.find({category: category}).populate('category');

    
    return res.status(200).json({
    data:proList,
    message: "List of Products",
    status: true
   });  
}

export const products_list = async function(req, res) 
{
    const {cateId,sortby} = req.body;
    if(cateId.length>0)
    {var proList = await Product.find({category:{$in:cateId}}).populate('category').sort({price:sortby});}

    else
    {
        var proList = await Product.find({}).populate('category').sort({price:sortby});   
    }
    var host = req.get('host');
    console.log(host);

    
    return res.status(200).json({
    data:proList,
    imageBaseUrl:'http://'+host+"/images/",
    message: "List of Products",
    status: true
   });  
}


export const pro_list = async function(req, res) {
    
    let proList = await Product.find({}).populate('category');
    var host = req.get('host');
    console.log(host);

    
    return res.status(200).json({
    data:proList,
    imageBaseUrl:'http://'+host+"/images/",
    message: "List of Products",
    status: true
   });  
}


export const set_session = async (req, res) => {
    req.session.name = req.params.name
    return res.status(200).json({
        name: req.session.name,
        status: true
       });  
}

export const get_session = async (req, res) => {
    return res.status(200).json({
        name: req.session.name,
        status: true
       });  
    
}
export const destroy_session = async (req, res) => {

    req.session.destroy(function(err){

        return res.status(200).json({
            
            message:"Session Destroyed",
            status: true
           });  
    })
}


export const userdata = async (req, res) => {
    const {getemail,getpassword} = req.body;
    
    const userList = await User.find({email:getemail,password:getpassword});
    if(userList.length > 0)
    {
        return res.status(200).json({
            data:userList,
            message: "Logged in Successfully",
            status: true
           });   
    }
    else
    {
        return res.status(422).json({
            
            message: "User Not Found",
            status: false
           });   
    }
    
    
    
}


    
  

