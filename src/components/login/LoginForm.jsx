import { TextField, Box, Button, FormControl } from '@mui/material';
import PropTypes from 'prop-types';

export default function LoginForm({ formData, loading, error, onSubmit, onChange }) {
    return (
        <FormControl component="form" onSubmit={onSubmit} fullWidth>
            <Box display={'flex'} flexDirection={'column'} gap={2} width={320}>
                <TextField
                    required
                    id="email-input"
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={onChange}
                    disabled={loading}
                    error={!!error}
                />
                <TextField
                    required
                    id="password-input"
                    label="Password"
                    type="password"
                    value={formData.password}
                    onChange={onChange}
                    disabled={loading}
                    error={!!error}
                />
            </Box>
            <br />
            <Box display={'flex'} flexDirection={'column'} gap={2}>
                <Button 
                    type="submit" 
                    variant="contained" 
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </Button>
                <Button variant="text" disabled={loading}>Sign Up</Button>
            </Box>
        </FormControl>
    );
}

LoginForm.propTypes = {
    formData: PropTypes.shape({
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};