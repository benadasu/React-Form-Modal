import React from "react";
import { useState} from "react";
import { Card, styled,Modal, CardContent, Box, Button, IconButton } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddNewUser from "./addnewuserform";
import { useSelector} from "react-redux";
const Formcard = styled(Card)(() =>({
    fontSize: 18,
    color:"pink",
    backgroundColor:"#faf5f5",
    margin:"10px 100px 0px 100px"
   }));
const Addnewuser= styled(Box)(()=>({
    display:"box",
    textAlign:"right"
   }));
const Styleddatagrid= styled(Box)(()=>({
    display:"box",
    textAlign:"right"
   }));
const columns = [
    { field: 'firstName', headerName: 'First name', width: 200 },
    { field: 'middleName', headerName: 'Middle name', width: 200 },
    { field: 'lastName', headerName: 'Last name', width: 200 },
    {
      field: 'age',
      headerName: 'Age',
      width: 90,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      width: 200,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 200,
    }
  ];
const Form_modal =() => {
  const userDatas=useSelector(state=>state.userData);
  //console.log(userDatas);
  const row = [
  { id:1,firstName: 'Snow', middleName: 'Jon',lastName: 'Jon', age: 35, email: " Snow Jon", phoneNumber: " Snow Jon", address: " Snow Jon" },
  ];
  const rows = row;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    return (
    <Formcard>
    <Box>
    <CardContent>
      <Modal        
        open={open}
        onClose={handleClose}       
        sx={{
          display: 'flex',
          p: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}       
      >      
          <AddNewUser/>       
      </Modal>
          <Addnewuser>
            <IconButton>
            <PersonAddIcon/>
            </IconButton>
            <Button onClick={handleOpen} sx={{textTransform:"none"}} variant="contained" color="success">
                Add New User
            </Button>                        
          </Addnewuser>
              <Styleddatagrid>
              <DataGrid
                  sx={{
                          backgroundColor: '#d9d7d7',
                          margin:'10px 50px 0px 50px',                          
                  }}
                  rows={rows}
                  columns={columns}                       
                  initialState={{
                  pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                  },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
              />
              </Styleddatagrid>
          </CardContent>
        </Box>
        </Formcard>
    );
    
}
export default Form_modal;