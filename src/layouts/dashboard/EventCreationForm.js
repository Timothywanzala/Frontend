// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Box, Button, TextField, Typography, Card, CardContent } from '@mui/material';

// const EventCreationForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     eventName: '',
//     eventDate: '',
//     deliveryMode: '',
//     eventDetails: '',
//     contact: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your event creation logic here
//     console.log('Event Created:', formData);
//     alert('Event successfully created!');
//     onClose();
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h6" gutterBottom>
//           Create New Event
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Event Name"
//             name="eventName"
//             value={formData.eventName}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//             required
//           />
//           <TextField
//             label="Event Date"
//             name="eventDate"
//             type="date"
//             value={formData.eventDate}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//             InputLabelProps={{ shrink: true }}
//             required
//           />
//           <TextField
//             label="Delivery Mode"
//             name="deliveryMode"
//             value={formData.deliveryMode}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//             required
//           />
//           <TextField
//             label="Event Details"
//             name="eventDetails"
//             value={formData.eventDetails}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//             multiline
//             rows={4}
//             required
//           />
//           <TextField
//             label="Contact"
//             name="contact"
//             value={formData.contact}
//             onChange={handleInputChange}
//             fullWidth
//             margin="normal"
//             required
//           />
//           <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
//             <Button type="button" onClick={onClose} variant="outlined">
//               Cancel
//             </Button>
//             <Button type="submit" variant="contained">
//               Create Event
//             </Button>
//           </Box>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// EventCreationForm.propTypes = {
//   onClose: PropTypes.func.isRequired
// };

// export default EventCreationForm;
