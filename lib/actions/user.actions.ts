// code will be run on the server
'use server'

import { connectToDatabase } from '@/lib/mongo.db/database'

import User from '@/lib/mongo.db/database/models/user.model'
import { handleError } from '@/lib/utils'

import { CreateUserParams, UpdateUserParams } from '@/types'

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error)
  }
}

