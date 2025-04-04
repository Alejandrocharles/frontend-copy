import { Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function StatsCard({ title, value }) {
    return (
        <Card sx={{ height: 200, width: 300, display: 'flex', alignItems: 'center', justifyContent: 'center'    }}>
            <CardContent>
                <Typography color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h4">
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
}

StatsCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};