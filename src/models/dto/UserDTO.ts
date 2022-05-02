interface BaseUserDTO {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface UserDTO extends BaseUserDTO {
    id: number
}

export interface CreateUserDTO extends BaseUserDTO { }

export interface UpdateUserDTO extends Partial<BaseUserDTO> { }