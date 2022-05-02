import Joi from 'joi'
import { CreateTaskDTO, UpdateTaskDTO } from '../dto/TaskDTO'

export const taskCreateSchema: Joi.ObjectSchema<CreateTaskDTO> = Joi.object().keys({
    name: Joi.string().required(),
    type: Joi.string().required(),
    photo: Joi.string().uri()
})

export const taskUpdateSchema: Joi.ObjectSchema<UpdateTaskDTO> = Joi.object().keys({
    name: Joi.string(),
    type: Joi.string(),
    photo: Joi.string().uri()
})