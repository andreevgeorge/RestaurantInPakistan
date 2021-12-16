module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cb5c39a9491d0988e91f5fad4bbddd87'),
  },
});
