interface BaseTaskDTO {
    title: string
    content: string
    done: boolean
    user: string  
}

export interface TaskDTO extends BaseTaskDTO {
    id: number
    userId: number | null
}

export interface CreateTaskDTO extends BaseTaskDTO {}

export interface UpdateTaskDTO extends Partial<BaseTaskDTO>{}