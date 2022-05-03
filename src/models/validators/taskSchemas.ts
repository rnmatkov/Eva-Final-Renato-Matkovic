import Joi from 'joi'
import { CreateTaskDTO, UpdateTaskDTO } from '../dto/TaskDTO'

export const taskCreateSchema: Joi.ObjectSchema<CreateTaskDTO> = Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
})

export const taskUpdateSchema: Joi.ObjectSchema<UpdateTaskDTO> = Joi.object().keys({
    title: Joi.string(),
    content: Joi.string(),
    done: Joi.boolean()
})