import { Typography, Alert } from '@mui/material';
import PropTypes from 'prop-types';

export default function LoginHeader({ error }) {
    return (
        <>
            <Typography variant="h3">Welcome back!</Typography>
            <br />
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            <Typography variant="body1">Please enter your email and password</Typography>
            <br />
        </>
    );
}

LoginHeader.propTypes = {
    error: PropTypes.string,
};