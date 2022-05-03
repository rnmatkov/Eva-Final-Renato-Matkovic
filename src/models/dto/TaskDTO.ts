export interface BaseTaskDTO {
    title: string
    content: string
    done: boolean
    id?: number
}

export interface TaskDTO extends BaseTaskDTO {
    id: number
    userId: number | null
}

export interface CreateTaskDTO extends BaseTaskDTO { }

export interface UpdateTaskDTO extends Partial<BaseTaskDTO> { }