import mongoose from 'mongoose'

// ensure close mongoose
after(() => {
  mongoose.models = {}
  // mongoose.modelSchemas = {}
  mongoose.connection.close()
})
