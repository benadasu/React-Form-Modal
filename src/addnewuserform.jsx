import { Box,Button,TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";
import { useDispatch,useSelector} from "react-redux";
import updatenewuser from "./redux/action";
import { useEffect } from "react";
    const initialvalues={
        id:"",
        firstName:"",
        middleName:"",
        lastName:"",
        age:"",
        email:"",
        phoneNumber:"",
        address:"",
    }
    const phoneNumberregex="^([+251]|0)([1-9]{8})";
    const validation=yup.object().shape(
        {
            firstName:yup.string().required("Required"),
            middleName:yup.string().required("Required"),
            lastName:yup.string().required("Required"),
            age:yup.number().required("Required"),
            email:yup.string().email(),
            phoneNumber:yup.string().matches(phoneNumberregex,"phone number not in valid format").required("required"),
            address:yup.string().required("required")
        }
    );
const AddNewUser=()=>{
    const datas=useSelector(state=>state.userData);
    const dispatch= useDispatch();

    // useEffect(() => {
    //     console.log(datas);
    //   }, [datas]);

    const handleformsubmit=(values)=>{
        console.log(values);
        // dispatch(updatenewuser(values));  
    };
    
return(
    <Formik
    onSubmit={handleformsubmit}
    initialValues={initialvalues}
    validationSchema={validation}
    >
    {({errors,
        values,
         touched,
         handleChange,
         handleBlur,
         handleSubmit
        })=>(
            <form
            onSubmit={handleSubmit}
            >
                <Box
                 position= "fixed"
                 left="15%"           
                 top="200px"
                 width="70%"
                 bgcolor="background.paper"          
                 borderRadius="20px"
                 border="4px solid #ebeae6"
                 boxShadow="(theme) => theme.shadows[5]">
                    <Box>
                        <Typography variant="h4"
                        color="primary"
                        textAlign="center"
                        margin="10px 10px">
                            Create New User Form
                        </Typography>
                    </Box>
                    <Box
                    display="grid"
                    gridTemplateColumns="repeat(6,minmax(0,1fr))"
                    gap="20px"
                    margin="10px"
                    >
                        <TextField
                            variant="filled"
                            type="text"
                            label="First Name"
                            value={values.firstName}
                            name="firstName"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={!!touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                            sx={{gridColumn:"span 2"}}
                        />
                        <TextField
                            variant="filled"
                            type="text"
                            label="Middle Name"
                            value={values.middleName}
                            name="middleName"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={!!touched.middleName && !!errors.middleName}
                            helperText={touched.middleName && errors.middleName}
                            sx={{gridColumn:"span 2"}}
                        />
                        <TextField
                            variant="filled"
                            type="text"
                            label="Last Name"
                            value={values.lastName}
                            name="lastName"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={!!touched.lastName && !!errors.lastName}
                            helperText={touched.lastName && errors.lastName}
                            sx={{gridColumn:"span 2"}}
                        />
                        <TextField
                            variant="filled"
                            type="number"
                            label="Age"
                            value={values.age}
                            name="age"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={!!touched.age && !!errors.age}
                            helperText={touched.age && errors.age}
                            sx={{gridColumn:"span 3"}}
                        />
                        <TextField
                            variant="filled"
                            type="text"
                            label="Email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx={{gridColumn:"span 3"}}
                        />
                        <TextField
                            variant="filled"
                            type="text"
                            label="Phone Number"
                            value={values.phoneNumber}
                            placeholder="+2519... or 09...."
                            name="phoneNumber"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={!!touched.phoneNumber && !!errors.phoneNumber}
                            helperText={touched.phoneNumber && errors.phoneNumber}
                            sx={{gridColumn:"span 3"}}
                        />
                        <TextField
                            variant="filled"
                            type="text"
                            label="Address"
                            value={values.address}
                            name="address"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={!!touched.address && !!errors.address}
                            helperText={touched.address && errors.address}
                            sx={{gridColumn:"span 3"}}
                        />
                        
                        <Button sx={{marginLeft:"40%",marginRight:"40%", gridColumn:"span 6",textTransform:"none"}} type="submit" variant="contained" color="success">
                                    Create
                        </Button>                
                        
                    </Box>
            </Box>
            </form>
        )}
    </Formik>
);
}
export default AddNewUser;