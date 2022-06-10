
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.11.1
 * Query Engine version: 1a2506facaf1a4727b7c26850735e88ec779dee9
 */
Prisma.prismaVersion = {
  client: "3.11.1",
  engine: "1a2506facaf1a4727b7c26850735e88ec779dee9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.DatabaseUserScalarFieldEnum = makeEnum({
  id: 'id',
  username: 'username',
  email: 'email',
  emailConfirmed: 'emailConfirmed',
  password: 'password'
});

exports.Prisma.DatabasePasswordResetScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  code: 'code',
  createdAt: 'createdAt',
  userId: 'userId'
});

exports.Prisma.DatabaseMangaScalarFieldEnum = makeEnum({
  id: 'id',
  source: 'source',
  sourceId: 'sourceId',
  createdAt: 'createdAt',
  originalName: 'originalName',
  uaName: 'uaName',
  description: 'description',
  type: 'type',
  releaseDate: 'releaseDate',
  finishDate: 'finishDate'
});

exports.Prisma.DatabaseImageScalarFieldEnum = makeEnum({
  id: 'id',
  originalSrc: 'originalSrc',
  originalAspectRatio: 'originalAspectRatio',
  targetId: 'targetId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.DatabaseMangaSource = makeEnum({
  KITSU: 'KITSU'
});

exports.DatabaseMangaType = makeEnum({
  MANGA: 'MANGA',
  MANHUA: 'MANHUA',
  MANHWA: 'MANHWA'
});

exports.Prisma.ModelName = makeEnum({
  DatabaseUser: 'DatabaseUser',
  DatabasePasswordReset: 'DatabasePasswordReset',
  DatabaseManga: 'DatabaseManga',
  DatabaseImage: 'DatabaseImage'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
