const DATABASE_CONNECTION = process.env.DATABASE_URL;

const connectDB = async () => {

    await mongoose.connect(DATABASE_CONNECTION, {
        UseNewUrlParser: true,
    });
    console.log("Connected to Database")
}

export default connectDB;