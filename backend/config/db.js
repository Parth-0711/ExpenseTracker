import mongoose from 'mongoose'

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://parthjadhav177_db_user:LrBwmgFbtIlK0NQy@expensecltr0.f19w6rk.mongodb.net/Expense").then(()=>console.log("DB Connected"));
}