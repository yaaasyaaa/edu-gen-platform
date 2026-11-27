import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

// Полифиллы для react-router-dom
Object.assign(global, { TextDecoder, TextEncoder })