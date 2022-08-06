import mongoose from 'mongoose';

const exampleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

let Example = mongoose.model('Example', exampleSchema);

export default Example;

