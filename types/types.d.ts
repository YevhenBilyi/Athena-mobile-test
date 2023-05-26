import { TreeItem, TreeItems } from "dnd-kit-sortable-tree"

export type Assignment = {
  content?: string
  id: number
  name: string
}

export type Sheet = {
  attribute_name: "status" | "improvement" | "risk" | "benefits" | "vision" | "vision_decades" | "barriers" | "actions" | "initiative" | "help" | "support" | "environment" | "imagery" | "personalstatement" | "values"
  content?: string
  created_on: string
  goal?: Goal
  id: number
  info: any
  is_active?: boolean
  is_deleted?: boolean
  sheet_name?: string
}

export type Character = {
  goal: number
  type: 'character'
  id: string
  name: string
  show_in_lobby?: boolean
}

export type Generic = {
  goal: number
  type: 'generic'
  id: string
  name: string
  show_in_lobby?: boolean
}


export type HabitScale = {
  type: "boolean" | "range" | "numeric"
  range?: {
    min: number
    max: number
  }
}

export type HabitLoop = {
  type: "daily" | "routine"
  days?: string[]
}

export type Habit = {
  description?: string
  type: 'habit'
  goal: number
  id: string
  loop?: HabitLoop
  name: string
  scale?: HabitScale
  show_in_lobby?: boolean
  start_date: string
}


export type TaskRepeat = {
  task: number
  type:  "weekly" | "monthly" | "yearly"
  frequency: {
    every: number, 
    on: string[] | 'first' | 'now' | 'last'
  }
  begins_on: Date
  ends_on: {date: Date}| {occurrances: number}
  suffix: boolean
  created_on: Date
  updated_on: Date
  finished: boolean
  subtasks: number[]
}

export type Task = {
  due_date: string
  trophy_date?: string | null
  type: 'task'
  goal: number
  id: string
  name: string
  show_in_lobby?: boolean
  finished: boolean
  repeat?: number
  master?: TaskRepeat
}





export type GoalItem = Habit | Task | Character | Generic;



export type Goal = {
  goalitems: GoalItem[]
  habits: Habit[]
  tasks: Task[]
  characters: Character[]
  generics: Generic[]
  id: number
  is_deleted: boolean
  is_active: boolean
  lobby_personal: boolean
  lobby_values: boolean
  itemorder: RawItemOrder[] | null
  name: string
  sheets: Sheet[]
}

export type HabitLog = {
  date: string
  habit: string
  id: number
  value: number
}


export type RawItemOrder = {
  id: string
  children: RawItemOrder[]
  collapsed?: boolean
}

export type TreeGoalItem = {
  goal?: GoalItem
  i?: number
}

export type ItemOrder = TreeItem<TreeGoalItem>