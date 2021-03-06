var mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// SCHEMA SETUP
var designPieceSchema = new mongoose.Schema({
    name: String,
    category: String,
    image: String,
    description: String,
    author: {
	   id: {
		   type: mongoose.Schema.Types.ObjectId,
		   ref: "User"
	   },
	   username: String
	},
	reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    rating: {
        type: Number,
        default: 0
    },
	likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

module.exports = mongoose.model("DesignPiece", designPieceSchema);