module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd3743240fa5a8abe2e45b422184bc073'),
  },
});
