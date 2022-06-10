
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model DatabaseUser
 * 
 */
export type DatabaseUser = {
  id: string
  username: string
  email: string
  emailConfirmed: boolean
  password: string
}

/**
 * Model DatabasePasswordReset
 * 
 */
export type DatabasePasswordReset = {
  id: string
  email: string
  code: string
  createdAt: Date
  userId: string
}

/**
 * Model DatabaseManga
 * 
 */
export type DatabaseManga = {
  id: string
  source: DatabaseMangaSource
  sourceId: string
  createdAt: Date
  originalName: string
  uaName: string | null
  description: string
  type: DatabaseMangaType
  releaseDate: Date | null
  finishDate: Date | null
}

/**
 * Model DatabaseImage
 * 
 */
export type DatabaseImage = {
  id: string
  originalSrc: string
  originalAspectRatio: number
  targetId: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const DatabaseMangaSource: {
  KITSU: 'KITSU'
};

export type DatabaseMangaSource = (typeof DatabaseMangaSource)[keyof typeof DatabaseMangaSource]


export const DatabaseMangaType: {
  MANGA: 'MANGA',
  MANHUA: 'MANHUA',
  MANHWA: 'MANHWA'
};

export type DatabaseMangaType = (typeof DatabaseMangaType)[keyof typeof DatabaseMangaType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DatabaseUsers
 * const databaseUsers = await prisma.databaseUser.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DatabaseUsers
   * const databaseUsers = await prisma.databaseUser.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.databaseUser`: Exposes CRUD operations for the **DatabaseUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatabaseUsers
    * const databaseUsers = await prisma.databaseUser.findMany()
    * ```
    */
  get databaseUser(): Prisma.DatabaseUserDelegate<GlobalReject>;

  /**
   * `prisma.databasePasswordReset`: Exposes CRUD operations for the **DatabasePasswordReset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatabasePasswordResets
    * const databasePasswordResets = await prisma.databasePasswordReset.findMany()
    * ```
    */
  get databasePasswordReset(): Prisma.DatabasePasswordResetDelegate<GlobalReject>;

  /**
   * `prisma.databaseManga`: Exposes CRUD operations for the **DatabaseManga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatabaseMangas
    * const databaseMangas = await prisma.databaseManga.findMany()
    * ```
    */
  get databaseManga(): Prisma.DatabaseMangaDelegate<GlobalReject>;

  /**
   * `prisma.databaseImage`: Exposes CRUD operations for the **DatabaseImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatabaseImages
    * const databaseImages = await prisma.databaseImage.findMany()
    * ```
    */
  get databaseImage(): Prisma.DatabaseImageDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.11.1
   * Query Engine version: 1a2506facaf1a4727b7c26850735e88ec779dee9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    DatabaseUser: 'DatabaseUser',
    DatabasePasswordReset: 'DatabasePasswordReset',
    DatabaseManga: 'DatabaseManga',
    DatabaseImage: 'DatabaseImage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DatabaseUserCountOutputType
   */


  export type DatabaseUserCountOutputType = {
    passwordResets: number
  }

  export type DatabaseUserCountOutputTypeSelect = {
    passwordResets?: boolean
  }

  export type DatabaseUserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DatabaseUserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DatabaseUserCountOutputType
    : S extends undefined
    ? never
    : S extends DatabaseUserCountOutputTypeArgs
    ?'include' extends U
    ? DatabaseUserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DatabaseUserCountOutputType ? DatabaseUserCountOutputType[P] : never
  } 
    : DatabaseUserCountOutputType
  : DatabaseUserCountOutputType




  // Custom InputTypes

  /**
   * DatabaseUserCountOutputType without action
   */
  export type DatabaseUserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUserCountOutputType
     * 
    **/
    select?: DatabaseUserCountOutputTypeSelect | null
  }



  /**
   * Count Type DatabaseMangaCountOutputType
   */


  export type DatabaseMangaCountOutputType = {
    posters: number
  }

  export type DatabaseMangaCountOutputTypeSelect = {
    posters?: boolean
  }

  export type DatabaseMangaCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DatabaseMangaCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DatabaseMangaCountOutputType
    : S extends undefined
    ? never
    : S extends DatabaseMangaCountOutputTypeArgs
    ?'include' extends U
    ? DatabaseMangaCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DatabaseMangaCountOutputType ? DatabaseMangaCountOutputType[P] : never
  } 
    : DatabaseMangaCountOutputType
  : DatabaseMangaCountOutputType




  // Custom InputTypes

  /**
   * DatabaseMangaCountOutputType without action
   */
  export type DatabaseMangaCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DatabaseMangaCountOutputType
     * 
    **/
    select?: DatabaseMangaCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model DatabaseUser
   */


  export type AggregateDatabaseUser = {
    _count: DatabaseUserCountAggregateOutputType | null
    _min: DatabaseUserMinAggregateOutputType | null
    _max: DatabaseUserMaxAggregateOutputType | null
  }

  export type DatabaseUserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    emailConfirmed: boolean | null
    password: string | null
  }

  export type DatabaseUserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    emailConfirmed: boolean | null
    password: string | null
  }

  export type DatabaseUserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    emailConfirmed: number
    password: number
    _all: number
  }


  export type DatabaseUserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    emailConfirmed?: true
    password?: true
  }

  export type DatabaseUserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    emailConfirmed?: true
    password?: true
  }

  export type DatabaseUserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    emailConfirmed?: true
    password?: true
    _all?: true
  }

  export type DatabaseUserAggregateArgs = {
    /**
     * Filter which DatabaseUser to aggregate.
     * 
    **/
    where?: DatabaseUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DatabaseUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatabaseUsers
    **/
    _count?: true | DatabaseUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatabaseUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatabaseUserMaxAggregateInputType
  }

  export type GetDatabaseUserAggregateType<T extends DatabaseUserAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabaseUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabaseUser[P]>
      : GetScalarType<T[P], AggregateDatabaseUser[P]>
  }




  export type DatabaseUserGroupByArgs = {
    where?: DatabaseUserWhereInput
    orderBy?: Enumerable<DatabaseUserOrderByWithAggregationInput>
    by: Array<DatabaseUserScalarFieldEnum>
    having?: DatabaseUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatabaseUserCountAggregateInputType | true
    _min?: DatabaseUserMinAggregateInputType
    _max?: DatabaseUserMaxAggregateInputType
  }


  export type DatabaseUserGroupByOutputType = {
    id: string
    username: string
    email: string
    emailConfirmed: boolean
    password: string
    _count: DatabaseUserCountAggregateOutputType | null
    _min: DatabaseUserMinAggregateOutputType | null
    _max: DatabaseUserMaxAggregateOutputType | null
  }

  type GetDatabaseUserGroupByPayload<T extends DatabaseUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DatabaseUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatabaseUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatabaseUserGroupByOutputType[P]>
            : GetScalarType<T[P], DatabaseUserGroupByOutputType[P]>
        }
      >
    >


  export type DatabaseUserSelect = {
    id?: boolean
    username?: boolean
    email?: boolean
    emailConfirmed?: boolean
    password?: boolean
    passwordResets?: boolean | DatabasePasswordResetFindManyArgs
    _count?: boolean | DatabaseUserCountOutputTypeArgs
  }

  export type DatabaseUserInclude = {
    passwordResets?: boolean | DatabasePasswordResetFindManyArgs
    _count?: boolean | DatabaseUserCountOutputTypeArgs
  }

  export type DatabaseUserGetPayload<
    S extends boolean | null | undefined | DatabaseUserArgs,
    U = keyof S
      > = S extends true
        ? DatabaseUser
    : S extends undefined
    ? never
    : S extends DatabaseUserArgs | DatabaseUserFindManyArgs
    ?'include' extends U
    ? DatabaseUser  & {
    [P in TrueKeys<S['include']>]:
        P extends 'passwordResets' ? Array < DatabasePasswordResetGetPayload<S['include'][P]>>  :
        P extends '_count' ? DatabaseUserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'passwordResets' ? Array < DatabasePasswordResetGetPayload<S['select'][P]>>  :
        P extends '_count' ? DatabaseUserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof DatabaseUser ? DatabaseUser[P] : never
  } 
    : DatabaseUser
  : DatabaseUser


  type DatabaseUserCountArgs = Merge<
    Omit<DatabaseUserFindManyArgs, 'select' | 'include'> & {
      select?: DatabaseUserCountAggregateInputType | true
    }
  >

  export interface DatabaseUserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one DatabaseUser that matches the filter.
     * @param {DatabaseUserFindUniqueArgs} args - Arguments to find a DatabaseUser
     * @example
     * // Get one DatabaseUser
     * const databaseUser = await prisma.databaseUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DatabaseUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DatabaseUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DatabaseUser'> extends True ? CheckSelect<T, Prisma__DatabaseUserClient<DatabaseUser>, Prisma__DatabaseUserClient<DatabaseUserGetPayload<T>>> : CheckSelect<T, Prisma__DatabaseUserClient<DatabaseUser | null >, Prisma__DatabaseUserClient<DatabaseUserGetPayload<T> | null >>

    /**
     * Find the first DatabaseUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserFindFirstArgs} args - Arguments to find a DatabaseUser
     * @example
     * // Get one DatabaseUser
     * const databaseUser = await prisma.databaseUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DatabaseUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DatabaseUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DatabaseUser'> extends True ? CheckSelect<T, Prisma__DatabaseUserClient<DatabaseUser>, Prisma__DatabaseUserClient<DatabaseUserGetPayload<T>>> : CheckSelect<T, Prisma__DatabaseUserClient<DatabaseUser | null >, Prisma__DatabaseUserClient<DatabaseUserGetPayload<T> | null >>

    /**
     * Find zero or more DatabaseUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatabaseUsers
     * const databaseUsers = await prisma.databaseUser.findMany()
     * 
     * // Get first 10 DatabaseUsers
     * const databaseUsers = await prisma.databaseUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const databaseUserWithIdOnly = await prisma.databaseUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DatabaseUserFindManyArgs>(
      args?: SelectSubset<T, DatabaseUserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<DatabaseUser>>, PrismaPromise<Array<DatabaseUserGetPayload<T>>>>

    /**
     * Create a DatabaseUser.
     * @param {DatabaseUserCreateArgs} args - Arguments to create a DatabaseUser.
     * @example
     * // Create one DatabaseUser
     * const DatabaseUser = await prisma.databaseUser.create({
     *   data: {
     *     // ... data to create a DatabaseUser
     *   }
     * })
     * 
    **/
    create<T extends DatabaseUserCreateArgs>(
      args: SelectSubset<T, DatabaseUserCreateArgs>
    ): CheckSelect<T, Prisma__DatabaseUserClient<DatabaseUser>, Prisma__DatabaseUserClient<DatabaseUserGetPayload<T>>>

    /**
     * Create many DatabaseUsers.
     *     @param {DatabaseUserCreateManyArgs} args - Arguments to create many DatabaseUsers.
     *     @example
     *     // Create many DatabaseUsers
     *     const databaseUser = await prisma.databaseUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DatabaseUserCreateManyArgs>(
      args?: SelectSubset<T, DatabaseUserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DatabaseUser.
     * @param {DatabaseUserDeleteArgs} args - Arguments to delete one DatabaseUser.
     * @example
     * // Delete one DatabaseUser
     * const DatabaseUser = await prisma.databaseUser.delete({
     *   where: {
     *     // ... filter to delete one DatabaseUser
     *   }
     * })
     * 
    **/
    delete<T extends DatabaseUserDeleteArgs>(
      args: SelectSubset<T, DatabaseUserDeleteArgs>
    ): CheckSelect<T, Prisma__DatabaseUserClient<DatabaseUser>, Prisma__DatabaseUserClient<DatabaseUserGetPayload<T>>>

    /**
     * Update one DatabaseUser.
     * @param {DatabaseUserUpdateArgs} args - Arguments to update one DatabaseUser.
     * @example
     * // Update one DatabaseUser
     * const databaseUser = await prisma.databaseUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DatabaseUserUpdateArgs>(
      args: SelectSubset<T, DatabaseUserUpdateArgs>
    ): CheckSelect<T, Prisma__DatabaseUserClient<DatabaseUser>, Prisma__DatabaseUserClient<DatabaseUserGetPayload<T>>>

    /**
     * Delete zero or more DatabaseUsers.
     * @param {DatabaseUserDeleteManyArgs} args - Arguments to filter DatabaseUsers to delete.
     * @example
     * // Delete a few DatabaseUsers
     * const { count } = await prisma.databaseUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DatabaseUserDeleteManyArgs>(
      args?: SelectSubset<T, DatabaseUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatabaseUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatabaseUsers
     * const databaseUser = await prisma.databaseUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DatabaseUserUpdateManyArgs>(
      args: SelectSubset<T, DatabaseUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DatabaseUser.
     * @param {DatabaseUserUpsertArgs} args - Arguments to update or create a DatabaseUser.
     * @example
     * // Update or create a DatabaseUser
     * const databaseUser = await prisma.databaseUser.upsert({
     *   create: {
     *     // ... data to create a DatabaseUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatabaseUser we want to update
     *   }
     * })
    **/
    upsert<T extends DatabaseUserUpsertArgs>(
      args: SelectSubset<T, DatabaseUserUpsertArgs>
    ): CheckSelect<T, Prisma__DatabaseUserClient<DatabaseUser>, Prisma__DatabaseUserClient<DatabaseUserGetPayload<T>>>

    /**
     * Count the number of DatabaseUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserCountArgs} args - Arguments to filter DatabaseUsers to count.
     * @example
     * // Count the number of DatabaseUsers
     * const count = await prisma.databaseUser.count({
     *   where: {
     *     // ... the filter for the DatabaseUsers we want to count
     *   }
     * })
    **/
    count<T extends DatabaseUserCountArgs>(
      args?: Subset<T, DatabaseUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatabaseUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatabaseUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatabaseUserAggregateArgs>(args: Subset<T, DatabaseUserAggregateArgs>): PrismaPromise<GetDatabaseUserAggregateType<T>>

    /**
     * Group by DatabaseUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatabaseUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatabaseUserGroupByArgs['orderBy'] }
        : { orderBy?: DatabaseUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatabaseUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabaseUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatabaseUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DatabaseUserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    passwordResets<T extends DatabasePasswordResetFindManyArgs = {}>(args?: Subset<T, DatabasePasswordResetFindManyArgs>): CheckSelect<T, PrismaPromise<Array<DatabasePasswordReset>>, PrismaPromise<Array<DatabasePasswordResetGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * DatabaseUser findUnique
   */
  export type DatabaseUserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUser
     * 
    **/
    select?: DatabaseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserInclude | null
    /**
     * Throw an Error if a DatabaseUser can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DatabaseUser to fetch.
     * 
    **/
    where: DatabaseUserWhereUniqueInput
  }


  /**
   * DatabaseUser findFirst
   */
  export type DatabaseUserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUser
     * 
    **/
    select?: DatabaseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserInclude | null
    /**
     * Throw an Error if a DatabaseUser can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DatabaseUser to fetch.
     * 
    **/
    where?: DatabaseUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatabaseUsers.
     * 
    **/
    cursor?: DatabaseUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatabaseUsers.
     * 
    **/
    distinct?: Enumerable<DatabaseUserScalarFieldEnum>
  }


  /**
   * DatabaseUser findMany
   */
  export type DatabaseUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUser
     * 
    **/
    select?: DatabaseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserInclude | null
    /**
     * Filter, which DatabaseUsers to fetch.
     * 
    **/
    where?: DatabaseUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatabaseUsers.
     * 
    **/
    cursor?: DatabaseUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DatabaseUserScalarFieldEnum>
  }


  /**
   * DatabaseUser create
   */
  export type DatabaseUserCreateArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUser
     * 
    **/
    select?: DatabaseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserInclude | null
    /**
     * The data needed to create a DatabaseUser.
     * 
    **/
    data: XOR<DatabaseUserCreateInput, DatabaseUserUncheckedCreateInput>
  }


  /**
   * DatabaseUser createMany
   */
  export type DatabaseUserCreateManyArgs = {
    /**
     * The data used to create many DatabaseUsers.
     * 
    **/
    data: Enumerable<DatabaseUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DatabaseUser update
   */
  export type DatabaseUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUser
     * 
    **/
    select?: DatabaseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserInclude | null
    /**
     * The data needed to update a DatabaseUser.
     * 
    **/
    data: XOR<DatabaseUserUpdateInput, DatabaseUserUncheckedUpdateInput>
    /**
     * Choose, which DatabaseUser to update.
     * 
    **/
    where: DatabaseUserWhereUniqueInput
  }


  /**
   * DatabaseUser updateMany
   */
  export type DatabaseUserUpdateManyArgs = {
    /**
     * The data used to update DatabaseUsers.
     * 
    **/
    data: XOR<DatabaseUserUpdateManyMutationInput, DatabaseUserUncheckedUpdateManyInput>
    /**
     * Filter which DatabaseUsers to update
     * 
    **/
    where?: DatabaseUserWhereInput
  }


  /**
   * DatabaseUser upsert
   */
  export type DatabaseUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUser
     * 
    **/
    select?: DatabaseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserInclude | null
    /**
     * The filter to search for the DatabaseUser to update in case it exists.
     * 
    **/
    where: DatabaseUserWhereUniqueInput
    /**
     * In case the DatabaseUser found by the `where` argument doesn't exist, create a new DatabaseUser with this data.
     * 
    **/
    create: XOR<DatabaseUserCreateInput, DatabaseUserUncheckedCreateInput>
    /**
     * In case the DatabaseUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DatabaseUserUpdateInput, DatabaseUserUncheckedUpdateInput>
  }


  /**
   * DatabaseUser delete
   */
  export type DatabaseUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUser
     * 
    **/
    select?: DatabaseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserInclude | null
    /**
     * Filter which DatabaseUser to delete.
     * 
    **/
    where: DatabaseUserWhereUniqueInput
  }


  /**
   * DatabaseUser deleteMany
   */
  export type DatabaseUserDeleteManyArgs = {
    /**
     * Filter which DatabaseUsers to delete
     * 
    **/
    where?: DatabaseUserWhereInput
  }


  /**
   * DatabaseUser without action
   */
  export type DatabaseUserArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUser
     * 
    **/
    select?: DatabaseUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserInclude | null
  }



  /**
   * Model DatabasePasswordReset
   */


  export type AggregateDatabasePasswordReset = {
    _count: DatabasePasswordResetCountAggregateOutputType | null
    _min: DatabasePasswordResetMinAggregateOutputType | null
    _max: DatabasePasswordResetMaxAggregateOutputType | null
  }

  export type DatabasePasswordResetMinAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type DatabasePasswordResetMaxAggregateOutputType = {
    id: string | null
    email: string | null
    code: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type DatabasePasswordResetCountAggregateOutputType = {
    id: number
    email: number
    code: number
    createdAt: number
    userId: number
    _all: number
  }


  export type DatabasePasswordResetMinAggregateInputType = {
    id?: true
    email?: true
    code?: true
    createdAt?: true
    userId?: true
  }

  export type DatabasePasswordResetMaxAggregateInputType = {
    id?: true
    email?: true
    code?: true
    createdAt?: true
    userId?: true
  }

  export type DatabasePasswordResetCountAggregateInputType = {
    id?: true
    email?: true
    code?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type DatabasePasswordResetAggregateArgs = {
    /**
     * Filter which DatabasePasswordReset to aggregate.
     * 
    **/
    where?: DatabasePasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabasePasswordResets to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabasePasswordResetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DatabasePasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabasePasswordResets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabasePasswordResets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatabasePasswordResets
    **/
    _count?: true | DatabasePasswordResetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatabasePasswordResetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatabasePasswordResetMaxAggregateInputType
  }

  export type GetDatabasePasswordResetAggregateType<T extends DatabasePasswordResetAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabasePasswordReset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabasePasswordReset[P]>
      : GetScalarType<T[P], AggregateDatabasePasswordReset[P]>
  }




  export type DatabasePasswordResetGroupByArgs = {
    where?: DatabasePasswordResetWhereInput
    orderBy?: Enumerable<DatabasePasswordResetOrderByWithAggregationInput>
    by: Array<DatabasePasswordResetScalarFieldEnum>
    having?: DatabasePasswordResetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatabasePasswordResetCountAggregateInputType | true
    _min?: DatabasePasswordResetMinAggregateInputType
    _max?: DatabasePasswordResetMaxAggregateInputType
  }


  export type DatabasePasswordResetGroupByOutputType = {
    id: string
    email: string
    code: string
    createdAt: Date
    userId: string
    _count: DatabasePasswordResetCountAggregateOutputType | null
    _min: DatabasePasswordResetMinAggregateOutputType | null
    _max: DatabasePasswordResetMaxAggregateOutputType | null
  }

  type GetDatabasePasswordResetGroupByPayload<T extends DatabasePasswordResetGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DatabasePasswordResetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatabasePasswordResetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatabasePasswordResetGroupByOutputType[P]>
            : GetScalarType<T[P], DatabasePasswordResetGroupByOutputType[P]>
        }
      >
    >


  export type DatabasePasswordResetSelect = {
    id?: boolean
    email?: boolean
    code?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | DatabaseUserArgs
  }

  export type DatabasePasswordResetInclude = {
    user?: boolean | DatabaseUserArgs
  }

  export type DatabasePasswordResetGetPayload<
    S extends boolean | null | undefined | DatabasePasswordResetArgs,
    U = keyof S
      > = S extends true
        ? DatabasePasswordReset
    : S extends undefined
    ? never
    : S extends DatabasePasswordResetArgs | DatabasePasswordResetFindManyArgs
    ?'include' extends U
    ? DatabasePasswordReset  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? DatabaseUserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? DatabaseUserGetPayload<S['select'][P]> :  P extends keyof DatabasePasswordReset ? DatabasePasswordReset[P] : never
  } 
    : DatabasePasswordReset
  : DatabasePasswordReset


  type DatabasePasswordResetCountArgs = Merge<
    Omit<DatabasePasswordResetFindManyArgs, 'select' | 'include'> & {
      select?: DatabasePasswordResetCountAggregateInputType | true
    }
  >

  export interface DatabasePasswordResetDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one DatabasePasswordReset that matches the filter.
     * @param {DatabasePasswordResetFindUniqueArgs} args - Arguments to find a DatabasePasswordReset
     * @example
     * // Get one DatabasePasswordReset
     * const databasePasswordReset = await prisma.databasePasswordReset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DatabasePasswordResetFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DatabasePasswordResetFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DatabasePasswordReset'> extends True ? CheckSelect<T, Prisma__DatabasePasswordResetClient<DatabasePasswordReset>, Prisma__DatabasePasswordResetClient<DatabasePasswordResetGetPayload<T>>> : CheckSelect<T, Prisma__DatabasePasswordResetClient<DatabasePasswordReset | null >, Prisma__DatabasePasswordResetClient<DatabasePasswordResetGetPayload<T> | null >>

    /**
     * Find the first DatabasePasswordReset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabasePasswordResetFindFirstArgs} args - Arguments to find a DatabasePasswordReset
     * @example
     * // Get one DatabasePasswordReset
     * const databasePasswordReset = await prisma.databasePasswordReset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DatabasePasswordResetFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DatabasePasswordResetFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DatabasePasswordReset'> extends True ? CheckSelect<T, Prisma__DatabasePasswordResetClient<DatabasePasswordReset>, Prisma__DatabasePasswordResetClient<DatabasePasswordResetGetPayload<T>>> : CheckSelect<T, Prisma__DatabasePasswordResetClient<DatabasePasswordReset | null >, Prisma__DatabasePasswordResetClient<DatabasePasswordResetGetPayload<T> | null >>

    /**
     * Find zero or more DatabasePasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabasePasswordResetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatabasePasswordResets
     * const databasePasswordResets = await prisma.databasePasswordReset.findMany()
     * 
     * // Get first 10 DatabasePasswordResets
     * const databasePasswordResets = await prisma.databasePasswordReset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const databasePasswordResetWithIdOnly = await prisma.databasePasswordReset.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DatabasePasswordResetFindManyArgs>(
      args?: SelectSubset<T, DatabasePasswordResetFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<DatabasePasswordReset>>, PrismaPromise<Array<DatabasePasswordResetGetPayload<T>>>>

    /**
     * Create a DatabasePasswordReset.
     * @param {DatabasePasswordResetCreateArgs} args - Arguments to create a DatabasePasswordReset.
     * @example
     * // Create one DatabasePasswordReset
     * const DatabasePasswordReset = await prisma.databasePasswordReset.create({
     *   data: {
     *     // ... data to create a DatabasePasswordReset
     *   }
     * })
     * 
    **/
    create<T extends DatabasePasswordResetCreateArgs>(
      args: SelectSubset<T, DatabasePasswordResetCreateArgs>
    ): CheckSelect<T, Prisma__DatabasePasswordResetClient<DatabasePasswordReset>, Prisma__DatabasePasswordResetClient<DatabasePasswordResetGetPayload<T>>>

    /**
     * Create many DatabasePasswordResets.
     *     @param {DatabasePasswordResetCreateManyArgs} args - Arguments to create many DatabasePasswordResets.
     *     @example
     *     // Create many DatabasePasswordResets
     *     const databasePasswordReset = await prisma.databasePasswordReset.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DatabasePasswordResetCreateManyArgs>(
      args?: SelectSubset<T, DatabasePasswordResetCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DatabasePasswordReset.
     * @param {DatabasePasswordResetDeleteArgs} args - Arguments to delete one DatabasePasswordReset.
     * @example
     * // Delete one DatabasePasswordReset
     * const DatabasePasswordReset = await prisma.databasePasswordReset.delete({
     *   where: {
     *     // ... filter to delete one DatabasePasswordReset
     *   }
     * })
     * 
    **/
    delete<T extends DatabasePasswordResetDeleteArgs>(
      args: SelectSubset<T, DatabasePasswordResetDeleteArgs>
    ): CheckSelect<T, Prisma__DatabasePasswordResetClient<DatabasePasswordReset>, Prisma__DatabasePasswordResetClient<DatabasePasswordResetGetPayload<T>>>

    /**
     * Update one DatabasePasswordReset.
     * @param {DatabasePasswordResetUpdateArgs} args - Arguments to update one DatabasePasswordReset.
     * @example
     * // Update one DatabasePasswordReset
     * const databasePasswordReset = await prisma.databasePasswordReset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DatabasePasswordResetUpdateArgs>(
      args: SelectSubset<T, DatabasePasswordResetUpdateArgs>
    ): CheckSelect<T, Prisma__DatabasePasswordResetClient<DatabasePasswordReset>, Prisma__DatabasePasswordResetClient<DatabasePasswordResetGetPayload<T>>>

    /**
     * Delete zero or more DatabasePasswordResets.
     * @param {DatabasePasswordResetDeleteManyArgs} args - Arguments to filter DatabasePasswordResets to delete.
     * @example
     * // Delete a few DatabasePasswordResets
     * const { count } = await prisma.databasePasswordReset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DatabasePasswordResetDeleteManyArgs>(
      args?: SelectSubset<T, DatabasePasswordResetDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatabasePasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabasePasswordResetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatabasePasswordResets
     * const databasePasswordReset = await prisma.databasePasswordReset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DatabasePasswordResetUpdateManyArgs>(
      args: SelectSubset<T, DatabasePasswordResetUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DatabasePasswordReset.
     * @param {DatabasePasswordResetUpsertArgs} args - Arguments to update or create a DatabasePasswordReset.
     * @example
     * // Update or create a DatabasePasswordReset
     * const databasePasswordReset = await prisma.databasePasswordReset.upsert({
     *   create: {
     *     // ... data to create a DatabasePasswordReset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatabasePasswordReset we want to update
     *   }
     * })
    **/
    upsert<T extends DatabasePasswordResetUpsertArgs>(
      args: SelectSubset<T, DatabasePasswordResetUpsertArgs>
    ): CheckSelect<T, Prisma__DatabasePasswordResetClient<DatabasePasswordReset>, Prisma__DatabasePasswordResetClient<DatabasePasswordResetGetPayload<T>>>

    /**
     * Count the number of DatabasePasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabasePasswordResetCountArgs} args - Arguments to filter DatabasePasswordResets to count.
     * @example
     * // Count the number of DatabasePasswordResets
     * const count = await prisma.databasePasswordReset.count({
     *   where: {
     *     // ... the filter for the DatabasePasswordResets we want to count
     *   }
     * })
    **/
    count<T extends DatabasePasswordResetCountArgs>(
      args?: Subset<T, DatabasePasswordResetCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatabasePasswordResetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatabasePasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabasePasswordResetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatabasePasswordResetAggregateArgs>(args: Subset<T, DatabasePasswordResetAggregateArgs>): PrismaPromise<GetDatabasePasswordResetAggregateType<T>>

    /**
     * Group by DatabasePasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabasePasswordResetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatabasePasswordResetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatabasePasswordResetGroupByArgs['orderBy'] }
        : { orderBy?: DatabasePasswordResetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatabasePasswordResetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabasePasswordResetGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatabasePasswordReset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DatabasePasswordResetClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends DatabaseUserArgs = {}>(args?: Subset<T, DatabaseUserArgs>): CheckSelect<T, Prisma__DatabaseUserClient<DatabaseUser | null >, Prisma__DatabaseUserClient<DatabaseUserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * DatabasePasswordReset findUnique
   */
  export type DatabasePasswordResetFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the DatabasePasswordReset
     * 
    **/
    select?: DatabasePasswordResetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabasePasswordResetInclude | null
    /**
     * Throw an Error if a DatabasePasswordReset can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DatabasePasswordReset to fetch.
     * 
    **/
    where: DatabasePasswordResetWhereUniqueInput
  }


  /**
   * DatabasePasswordReset findFirst
   */
  export type DatabasePasswordResetFindFirstArgs = {
    /**
     * Select specific fields to fetch from the DatabasePasswordReset
     * 
    **/
    select?: DatabasePasswordResetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabasePasswordResetInclude | null
    /**
     * Throw an Error if a DatabasePasswordReset can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DatabasePasswordReset to fetch.
     * 
    **/
    where?: DatabasePasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabasePasswordResets to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabasePasswordResetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatabasePasswordResets.
     * 
    **/
    cursor?: DatabasePasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabasePasswordResets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabasePasswordResets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatabasePasswordResets.
     * 
    **/
    distinct?: Enumerable<DatabasePasswordResetScalarFieldEnum>
  }


  /**
   * DatabasePasswordReset findMany
   */
  export type DatabasePasswordResetFindManyArgs = {
    /**
     * Select specific fields to fetch from the DatabasePasswordReset
     * 
    **/
    select?: DatabasePasswordResetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabasePasswordResetInclude | null
    /**
     * Filter, which DatabasePasswordResets to fetch.
     * 
    **/
    where?: DatabasePasswordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabasePasswordResets to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabasePasswordResetOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatabasePasswordResets.
     * 
    **/
    cursor?: DatabasePasswordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabasePasswordResets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabasePasswordResets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DatabasePasswordResetScalarFieldEnum>
  }


  /**
   * DatabasePasswordReset create
   */
  export type DatabasePasswordResetCreateArgs = {
    /**
     * Select specific fields to fetch from the DatabasePasswordReset
     * 
    **/
    select?: DatabasePasswordResetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabasePasswordResetInclude | null
    /**
     * The data needed to create a DatabasePasswordReset.
     * 
    **/
    data: XOR<DatabasePasswordResetCreateInput, DatabasePasswordResetUncheckedCreateInput>
  }


  /**
   * DatabasePasswordReset createMany
   */
  export type DatabasePasswordResetCreateManyArgs = {
    /**
     * The data used to create many DatabasePasswordResets.
     * 
    **/
    data: Enumerable<DatabasePasswordResetCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DatabasePasswordReset update
   */
  export type DatabasePasswordResetUpdateArgs = {
    /**
     * Select specific fields to fetch from the DatabasePasswordReset
     * 
    **/
    select?: DatabasePasswordResetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabasePasswordResetInclude | null
    /**
     * The data needed to update a DatabasePasswordReset.
     * 
    **/
    data: XOR<DatabasePasswordResetUpdateInput, DatabasePasswordResetUncheckedUpdateInput>
    /**
     * Choose, which DatabasePasswordReset to update.
     * 
    **/
    where: DatabasePasswordResetWhereUniqueInput
  }


  /**
   * DatabasePasswordReset updateMany
   */
  export type DatabasePasswordResetUpdateManyArgs = {
    /**
     * The data used to update DatabasePasswordResets.
     * 
    **/
    data: XOR<DatabasePasswordResetUpdateManyMutationInput, DatabasePasswordResetUncheckedUpdateManyInput>
    /**
     * Filter which DatabasePasswordResets to update
     * 
    **/
    where?: DatabasePasswordResetWhereInput
  }


  /**
   * DatabasePasswordReset upsert
   */
  export type DatabasePasswordResetUpsertArgs = {
    /**
     * Select specific fields to fetch from the DatabasePasswordReset
     * 
    **/
    select?: DatabasePasswordResetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabasePasswordResetInclude | null
    /**
     * The filter to search for the DatabasePasswordReset to update in case it exists.
     * 
    **/
    where: DatabasePasswordResetWhereUniqueInput
    /**
     * In case the DatabasePasswordReset found by the `where` argument doesn't exist, create a new DatabasePasswordReset with this data.
     * 
    **/
    create: XOR<DatabasePasswordResetCreateInput, DatabasePasswordResetUncheckedCreateInput>
    /**
     * In case the DatabasePasswordReset was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DatabasePasswordResetUpdateInput, DatabasePasswordResetUncheckedUpdateInput>
  }


  /**
   * DatabasePasswordReset delete
   */
  export type DatabasePasswordResetDeleteArgs = {
    /**
     * Select specific fields to fetch from the DatabasePasswordReset
     * 
    **/
    select?: DatabasePasswordResetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabasePasswordResetInclude | null
    /**
     * Filter which DatabasePasswordReset to delete.
     * 
    **/
    where: DatabasePasswordResetWhereUniqueInput
  }


  /**
   * DatabasePasswordReset deleteMany
   */
  export type DatabasePasswordResetDeleteManyArgs = {
    /**
     * Filter which DatabasePasswordResets to delete
     * 
    **/
    where?: DatabasePasswordResetWhereInput
  }


  /**
   * DatabasePasswordReset without action
   */
  export type DatabasePasswordResetArgs = {
    /**
     * Select specific fields to fetch from the DatabasePasswordReset
     * 
    **/
    select?: DatabasePasswordResetSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabasePasswordResetInclude | null
  }



  /**
   * Model DatabaseManga
   */


  export type AggregateDatabaseManga = {
    _count: DatabaseMangaCountAggregateOutputType | null
    _min: DatabaseMangaMinAggregateOutputType | null
    _max: DatabaseMangaMaxAggregateOutputType | null
  }

  export type DatabaseMangaMinAggregateOutputType = {
    id: string | null
    source: DatabaseMangaSource | null
    sourceId: string | null
    createdAt: Date | null
    originalName: string | null
    uaName: string | null
    description: string | null
    type: DatabaseMangaType | null
    releaseDate: Date | null
    finishDate: Date | null
  }

  export type DatabaseMangaMaxAggregateOutputType = {
    id: string | null
    source: DatabaseMangaSource | null
    sourceId: string | null
    createdAt: Date | null
    originalName: string | null
    uaName: string | null
    description: string | null
    type: DatabaseMangaType | null
    releaseDate: Date | null
    finishDate: Date | null
  }

  export type DatabaseMangaCountAggregateOutputType = {
    id: number
    source: number
    sourceId: number
    createdAt: number
    originalName: number
    uaName: number
    description: number
    type: number
    releaseDate: number
    finishDate: number
    _all: number
  }


  export type DatabaseMangaMinAggregateInputType = {
    id?: true
    source?: true
    sourceId?: true
    createdAt?: true
    originalName?: true
    uaName?: true
    description?: true
    type?: true
    releaseDate?: true
    finishDate?: true
  }

  export type DatabaseMangaMaxAggregateInputType = {
    id?: true
    source?: true
    sourceId?: true
    createdAt?: true
    originalName?: true
    uaName?: true
    description?: true
    type?: true
    releaseDate?: true
    finishDate?: true
  }

  export type DatabaseMangaCountAggregateInputType = {
    id?: true
    source?: true
    sourceId?: true
    createdAt?: true
    originalName?: true
    uaName?: true
    description?: true
    type?: true
    releaseDate?: true
    finishDate?: true
    _all?: true
  }

  export type DatabaseMangaAggregateArgs = {
    /**
     * Filter which DatabaseManga to aggregate.
     * 
    **/
    where?: DatabaseMangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseMangas to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseMangaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DatabaseMangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseMangas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseMangas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatabaseMangas
    **/
    _count?: true | DatabaseMangaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatabaseMangaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatabaseMangaMaxAggregateInputType
  }

  export type GetDatabaseMangaAggregateType<T extends DatabaseMangaAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabaseManga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabaseManga[P]>
      : GetScalarType<T[P], AggregateDatabaseManga[P]>
  }




  export type DatabaseMangaGroupByArgs = {
    where?: DatabaseMangaWhereInput
    orderBy?: Enumerable<DatabaseMangaOrderByWithAggregationInput>
    by: Array<DatabaseMangaScalarFieldEnum>
    having?: DatabaseMangaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatabaseMangaCountAggregateInputType | true
    _min?: DatabaseMangaMinAggregateInputType
    _max?: DatabaseMangaMaxAggregateInputType
  }


  export type DatabaseMangaGroupByOutputType = {
    id: string
    source: DatabaseMangaSource
    sourceId: string
    createdAt: Date
    originalName: string
    uaName: string | null
    description: string
    type: DatabaseMangaType
    releaseDate: Date | null
    finishDate: Date | null
    _count: DatabaseMangaCountAggregateOutputType | null
    _min: DatabaseMangaMinAggregateOutputType | null
    _max: DatabaseMangaMaxAggregateOutputType | null
  }

  type GetDatabaseMangaGroupByPayload<T extends DatabaseMangaGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DatabaseMangaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatabaseMangaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatabaseMangaGroupByOutputType[P]>
            : GetScalarType<T[P], DatabaseMangaGroupByOutputType[P]>
        }
      >
    >


  export type DatabaseMangaSelect = {
    id?: boolean
    source?: boolean
    sourceId?: boolean
    createdAt?: boolean
    originalName?: boolean
    uaName?: boolean
    description?: boolean
    type?: boolean
    releaseDate?: boolean
    finishDate?: boolean
    posters?: boolean | DatabaseImageFindManyArgs
    _count?: boolean | DatabaseMangaCountOutputTypeArgs
  }

  export type DatabaseMangaInclude = {
    posters?: boolean | DatabaseImageFindManyArgs
    _count?: boolean | DatabaseMangaCountOutputTypeArgs
  }

  export type DatabaseMangaGetPayload<
    S extends boolean | null | undefined | DatabaseMangaArgs,
    U = keyof S
      > = S extends true
        ? DatabaseManga
    : S extends undefined
    ? never
    : S extends DatabaseMangaArgs | DatabaseMangaFindManyArgs
    ?'include' extends U
    ? DatabaseManga  & {
    [P in TrueKeys<S['include']>]:
        P extends 'posters' ? Array < DatabaseImageGetPayload<S['include'][P]>>  :
        P extends '_count' ? DatabaseMangaCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'posters' ? Array < DatabaseImageGetPayload<S['select'][P]>>  :
        P extends '_count' ? DatabaseMangaCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof DatabaseManga ? DatabaseManga[P] : never
  } 
    : DatabaseManga
  : DatabaseManga


  type DatabaseMangaCountArgs = Merge<
    Omit<DatabaseMangaFindManyArgs, 'select' | 'include'> & {
      select?: DatabaseMangaCountAggregateInputType | true
    }
  >

  export interface DatabaseMangaDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one DatabaseManga that matches the filter.
     * @param {DatabaseMangaFindUniqueArgs} args - Arguments to find a DatabaseManga
     * @example
     * // Get one DatabaseManga
     * const databaseManga = await prisma.databaseManga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DatabaseMangaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DatabaseMangaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DatabaseManga'> extends True ? CheckSelect<T, Prisma__DatabaseMangaClient<DatabaseManga>, Prisma__DatabaseMangaClient<DatabaseMangaGetPayload<T>>> : CheckSelect<T, Prisma__DatabaseMangaClient<DatabaseManga | null >, Prisma__DatabaseMangaClient<DatabaseMangaGetPayload<T> | null >>

    /**
     * Find the first DatabaseManga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMangaFindFirstArgs} args - Arguments to find a DatabaseManga
     * @example
     * // Get one DatabaseManga
     * const databaseManga = await prisma.databaseManga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DatabaseMangaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DatabaseMangaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DatabaseManga'> extends True ? CheckSelect<T, Prisma__DatabaseMangaClient<DatabaseManga>, Prisma__DatabaseMangaClient<DatabaseMangaGetPayload<T>>> : CheckSelect<T, Prisma__DatabaseMangaClient<DatabaseManga | null >, Prisma__DatabaseMangaClient<DatabaseMangaGetPayload<T> | null >>

    /**
     * Find zero or more DatabaseMangas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMangaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatabaseMangas
     * const databaseMangas = await prisma.databaseManga.findMany()
     * 
     * // Get first 10 DatabaseMangas
     * const databaseMangas = await prisma.databaseManga.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const databaseMangaWithIdOnly = await prisma.databaseManga.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DatabaseMangaFindManyArgs>(
      args?: SelectSubset<T, DatabaseMangaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<DatabaseManga>>, PrismaPromise<Array<DatabaseMangaGetPayload<T>>>>

    /**
     * Create a DatabaseManga.
     * @param {DatabaseMangaCreateArgs} args - Arguments to create a DatabaseManga.
     * @example
     * // Create one DatabaseManga
     * const DatabaseManga = await prisma.databaseManga.create({
     *   data: {
     *     // ... data to create a DatabaseManga
     *   }
     * })
     * 
    **/
    create<T extends DatabaseMangaCreateArgs>(
      args: SelectSubset<T, DatabaseMangaCreateArgs>
    ): CheckSelect<T, Prisma__DatabaseMangaClient<DatabaseManga>, Prisma__DatabaseMangaClient<DatabaseMangaGetPayload<T>>>

    /**
     * Create many DatabaseMangas.
     *     @param {DatabaseMangaCreateManyArgs} args - Arguments to create many DatabaseMangas.
     *     @example
     *     // Create many DatabaseMangas
     *     const databaseManga = await prisma.databaseManga.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DatabaseMangaCreateManyArgs>(
      args?: SelectSubset<T, DatabaseMangaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DatabaseManga.
     * @param {DatabaseMangaDeleteArgs} args - Arguments to delete one DatabaseManga.
     * @example
     * // Delete one DatabaseManga
     * const DatabaseManga = await prisma.databaseManga.delete({
     *   where: {
     *     // ... filter to delete one DatabaseManga
     *   }
     * })
     * 
    **/
    delete<T extends DatabaseMangaDeleteArgs>(
      args: SelectSubset<T, DatabaseMangaDeleteArgs>
    ): CheckSelect<T, Prisma__DatabaseMangaClient<DatabaseManga>, Prisma__DatabaseMangaClient<DatabaseMangaGetPayload<T>>>

    /**
     * Update one DatabaseManga.
     * @param {DatabaseMangaUpdateArgs} args - Arguments to update one DatabaseManga.
     * @example
     * // Update one DatabaseManga
     * const databaseManga = await prisma.databaseManga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DatabaseMangaUpdateArgs>(
      args: SelectSubset<T, DatabaseMangaUpdateArgs>
    ): CheckSelect<T, Prisma__DatabaseMangaClient<DatabaseManga>, Prisma__DatabaseMangaClient<DatabaseMangaGetPayload<T>>>

    /**
     * Delete zero or more DatabaseMangas.
     * @param {DatabaseMangaDeleteManyArgs} args - Arguments to filter DatabaseMangas to delete.
     * @example
     * // Delete a few DatabaseMangas
     * const { count } = await prisma.databaseManga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DatabaseMangaDeleteManyArgs>(
      args?: SelectSubset<T, DatabaseMangaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatabaseMangas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMangaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatabaseMangas
     * const databaseManga = await prisma.databaseManga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DatabaseMangaUpdateManyArgs>(
      args: SelectSubset<T, DatabaseMangaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DatabaseManga.
     * @param {DatabaseMangaUpsertArgs} args - Arguments to update or create a DatabaseManga.
     * @example
     * // Update or create a DatabaseManga
     * const databaseManga = await prisma.databaseManga.upsert({
     *   create: {
     *     // ... data to create a DatabaseManga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatabaseManga we want to update
     *   }
     * })
    **/
    upsert<T extends DatabaseMangaUpsertArgs>(
      args: SelectSubset<T, DatabaseMangaUpsertArgs>
    ): CheckSelect<T, Prisma__DatabaseMangaClient<DatabaseManga>, Prisma__DatabaseMangaClient<DatabaseMangaGetPayload<T>>>

    /**
     * Count the number of DatabaseMangas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMangaCountArgs} args - Arguments to filter DatabaseMangas to count.
     * @example
     * // Count the number of DatabaseMangas
     * const count = await prisma.databaseManga.count({
     *   where: {
     *     // ... the filter for the DatabaseMangas we want to count
     *   }
     * })
    **/
    count<T extends DatabaseMangaCountArgs>(
      args?: Subset<T, DatabaseMangaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatabaseMangaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatabaseManga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMangaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatabaseMangaAggregateArgs>(args: Subset<T, DatabaseMangaAggregateArgs>): PrismaPromise<GetDatabaseMangaAggregateType<T>>

    /**
     * Group by DatabaseManga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMangaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatabaseMangaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatabaseMangaGroupByArgs['orderBy'] }
        : { orderBy?: DatabaseMangaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatabaseMangaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabaseMangaGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatabaseManga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DatabaseMangaClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    posters<T extends DatabaseImageFindManyArgs = {}>(args?: Subset<T, DatabaseImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<DatabaseImage>>, PrismaPromise<Array<DatabaseImageGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * DatabaseManga findUnique
   */
  export type DatabaseMangaFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the DatabaseManga
     * 
    **/
    select?: DatabaseMangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseMangaInclude | null
    /**
     * Throw an Error if a DatabaseManga can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DatabaseManga to fetch.
     * 
    **/
    where: DatabaseMangaWhereUniqueInput
  }


  /**
   * DatabaseManga findFirst
   */
  export type DatabaseMangaFindFirstArgs = {
    /**
     * Select specific fields to fetch from the DatabaseManga
     * 
    **/
    select?: DatabaseMangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseMangaInclude | null
    /**
     * Throw an Error if a DatabaseManga can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DatabaseManga to fetch.
     * 
    **/
    where?: DatabaseMangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseMangas to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseMangaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatabaseMangas.
     * 
    **/
    cursor?: DatabaseMangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseMangas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseMangas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatabaseMangas.
     * 
    **/
    distinct?: Enumerable<DatabaseMangaScalarFieldEnum>
  }


  /**
   * DatabaseManga findMany
   */
  export type DatabaseMangaFindManyArgs = {
    /**
     * Select specific fields to fetch from the DatabaseManga
     * 
    **/
    select?: DatabaseMangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseMangaInclude | null
    /**
     * Filter, which DatabaseMangas to fetch.
     * 
    **/
    where?: DatabaseMangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseMangas to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseMangaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatabaseMangas.
     * 
    **/
    cursor?: DatabaseMangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseMangas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseMangas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DatabaseMangaScalarFieldEnum>
  }


  /**
   * DatabaseManga create
   */
  export type DatabaseMangaCreateArgs = {
    /**
     * Select specific fields to fetch from the DatabaseManga
     * 
    **/
    select?: DatabaseMangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseMangaInclude | null
    /**
     * The data needed to create a DatabaseManga.
     * 
    **/
    data: XOR<DatabaseMangaCreateInput, DatabaseMangaUncheckedCreateInput>
  }


  /**
   * DatabaseManga createMany
   */
  export type DatabaseMangaCreateManyArgs = {
    /**
     * The data used to create many DatabaseMangas.
     * 
    **/
    data: Enumerable<DatabaseMangaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DatabaseManga update
   */
  export type DatabaseMangaUpdateArgs = {
    /**
     * Select specific fields to fetch from the DatabaseManga
     * 
    **/
    select?: DatabaseMangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseMangaInclude | null
    /**
     * The data needed to update a DatabaseManga.
     * 
    **/
    data: XOR<DatabaseMangaUpdateInput, DatabaseMangaUncheckedUpdateInput>
    /**
     * Choose, which DatabaseManga to update.
     * 
    **/
    where: DatabaseMangaWhereUniqueInput
  }


  /**
   * DatabaseManga updateMany
   */
  export type DatabaseMangaUpdateManyArgs = {
    /**
     * The data used to update DatabaseMangas.
     * 
    **/
    data: XOR<DatabaseMangaUpdateManyMutationInput, DatabaseMangaUncheckedUpdateManyInput>
    /**
     * Filter which DatabaseMangas to update
     * 
    **/
    where?: DatabaseMangaWhereInput
  }


  /**
   * DatabaseManga upsert
   */
  export type DatabaseMangaUpsertArgs = {
    /**
     * Select specific fields to fetch from the DatabaseManga
     * 
    **/
    select?: DatabaseMangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseMangaInclude | null
    /**
     * The filter to search for the DatabaseManga to update in case it exists.
     * 
    **/
    where: DatabaseMangaWhereUniqueInput
    /**
     * In case the DatabaseManga found by the `where` argument doesn't exist, create a new DatabaseManga with this data.
     * 
    **/
    create: XOR<DatabaseMangaCreateInput, DatabaseMangaUncheckedCreateInput>
    /**
     * In case the DatabaseManga was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DatabaseMangaUpdateInput, DatabaseMangaUncheckedUpdateInput>
  }


  /**
   * DatabaseManga delete
   */
  export type DatabaseMangaDeleteArgs = {
    /**
     * Select specific fields to fetch from the DatabaseManga
     * 
    **/
    select?: DatabaseMangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseMangaInclude | null
    /**
     * Filter which DatabaseManga to delete.
     * 
    **/
    where: DatabaseMangaWhereUniqueInput
  }


  /**
   * DatabaseManga deleteMany
   */
  export type DatabaseMangaDeleteManyArgs = {
    /**
     * Filter which DatabaseMangas to delete
     * 
    **/
    where?: DatabaseMangaWhereInput
  }


  /**
   * DatabaseManga without action
   */
  export type DatabaseMangaArgs = {
    /**
     * Select specific fields to fetch from the DatabaseManga
     * 
    **/
    select?: DatabaseMangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseMangaInclude | null
  }



  /**
   * Model DatabaseImage
   */


  export type AggregateDatabaseImage = {
    _count: DatabaseImageCountAggregateOutputType | null
    _avg: DatabaseImageAvgAggregateOutputType | null
    _sum: DatabaseImageSumAggregateOutputType | null
    _min: DatabaseImageMinAggregateOutputType | null
    _max: DatabaseImageMaxAggregateOutputType | null
  }

  export type DatabaseImageAvgAggregateOutputType = {
    originalAspectRatio: number | null
  }

  export type DatabaseImageSumAggregateOutputType = {
    originalAspectRatio: number | null
  }

  export type DatabaseImageMinAggregateOutputType = {
    id: string | null
    originalSrc: string | null
    originalAspectRatio: number | null
    targetId: string | null
  }

  export type DatabaseImageMaxAggregateOutputType = {
    id: string | null
    originalSrc: string | null
    originalAspectRatio: number | null
    targetId: string | null
  }

  export type DatabaseImageCountAggregateOutputType = {
    id: number
    originalSrc: number
    originalAspectRatio: number
    targetId: number
    _all: number
  }


  export type DatabaseImageAvgAggregateInputType = {
    originalAspectRatio?: true
  }

  export type DatabaseImageSumAggregateInputType = {
    originalAspectRatio?: true
  }

  export type DatabaseImageMinAggregateInputType = {
    id?: true
    originalSrc?: true
    originalAspectRatio?: true
    targetId?: true
  }

  export type DatabaseImageMaxAggregateInputType = {
    id?: true
    originalSrc?: true
    originalAspectRatio?: true
    targetId?: true
  }

  export type DatabaseImageCountAggregateInputType = {
    id?: true
    originalSrc?: true
    originalAspectRatio?: true
    targetId?: true
    _all?: true
  }

  export type DatabaseImageAggregateArgs = {
    /**
     * Filter which DatabaseImage to aggregate.
     * 
    **/
    where?: DatabaseImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseImages to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DatabaseImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatabaseImages
    **/
    _count?: true | DatabaseImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatabaseImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatabaseImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatabaseImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatabaseImageMaxAggregateInputType
  }

  export type GetDatabaseImageAggregateType<T extends DatabaseImageAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabaseImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabaseImage[P]>
      : GetScalarType<T[P], AggregateDatabaseImage[P]>
  }




  export type DatabaseImageGroupByArgs = {
    where?: DatabaseImageWhereInput
    orderBy?: Enumerable<DatabaseImageOrderByWithAggregationInput>
    by: Array<DatabaseImageScalarFieldEnum>
    having?: DatabaseImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatabaseImageCountAggregateInputType | true
    _avg?: DatabaseImageAvgAggregateInputType
    _sum?: DatabaseImageSumAggregateInputType
    _min?: DatabaseImageMinAggregateInputType
    _max?: DatabaseImageMaxAggregateInputType
  }


  export type DatabaseImageGroupByOutputType = {
    id: string
    originalSrc: string
    originalAspectRatio: number
    targetId: string
    _count: DatabaseImageCountAggregateOutputType | null
    _avg: DatabaseImageAvgAggregateOutputType | null
    _sum: DatabaseImageSumAggregateOutputType | null
    _min: DatabaseImageMinAggregateOutputType | null
    _max: DatabaseImageMaxAggregateOutputType | null
  }

  type GetDatabaseImageGroupByPayload<T extends DatabaseImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DatabaseImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatabaseImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatabaseImageGroupByOutputType[P]>
            : GetScalarType<T[P], DatabaseImageGroupByOutputType[P]>
        }
      >
    >


  export type DatabaseImageSelect = {
    id?: boolean
    originalSrc?: boolean
    originalAspectRatio?: boolean
    targetId?: boolean
    targetManga?: boolean | DatabaseMangaArgs
  }

  export type DatabaseImageInclude = {
    targetManga?: boolean | DatabaseMangaArgs
  }

  export type DatabaseImageGetPayload<
    S extends boolean | null | undefined | DatabaseImageArgs,
    U = keyof S
      > = S extends true
        ? DatabaseImage
    : S extends undefined
    ? never
    : S extends DatabaseImageArgs | DatabaseImageFindManyArgs
    ?'include' extends U
    ? DatabaseImage  & {
    [P in TrueKeys<S['include']>]:
        P extends 'targetManga' ? DatabaseMangaGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'targetManga' ? DatabaseMangaGetPayload<S['select'][P]> | null :  P extends keyof DatabaseImage ? DatabaseImage[P] : never
  } 
    : DatabaseImage
  : DatabaseImage


  type DatabaseImageCountArgs = Merge<
    Omit<DatabaseImageFindManyArgs, 'select' | 'include'> & {
      select?: DatabaseImageCountAggregateInputType | true
    }
  >

  export interface DatabaseImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one DatabaseImage that matches the filter.
     * @param {DatabaseImageFindUniqueArgs} args - Arguments to find a DatabaseImage
     * @example
     * // Get one DatabaseImage
     * const databaseImage = await prisma.databaseImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DatabaseImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DatabaseImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DatabaseImage'> extends True ? CheckSelect<T, Prisma__DatabaseImageClient<DatabaseImage>, Prisma__DatabaseImageClient<DatabaseImageGetPayload<T>>> : CheckSelect<T, Prisma__DatabaseImageClient<DatabaseImage | null >, Prisma__DatabaseImageClient<DatabaseImageGetPayload<T> | null >>

    /**
     * Find the first DatabaseImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseImageFindFirstArgs} args - Arguments to find a DatabaseImage
     * @example
     * // Get one DatabaseImage
     * const databaseImage = await prisma.databaseImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DatabaseImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DatabaseImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DatabaseImage'> extends True ? CheckSelect<T, Prisma__DatabaseImageClient<DatabaseImage>, Prisma__DatabaseImageClient<DatabaseImageGetPayload<T>>> : CheckSelect<T, Prisma__DatabaseImageClient<DatabaseImage | null >, Prisma__DatabaseImageClient<DatabaseImageGetPayload<T> | null >>

    /**
     * Find zero or more DatabaseImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatabaseImages
     * const databaseImages = await prisma.databaseImage.findMany()
     * 
     * // Get first 10 DatabaseImages
     * const databaseImages = await prisma.databaseImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const databaseImageWithIdOnly = await prisma.databaseImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DatabaseImageFindManyArgs>(
      args?: SelectSubset<T, DatabaseImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<DatabaseImage>>, PrismaPromise<Array<DatabaseImageGetPayload<T>>>>

    /**
     * Create a DatabaseImage.
     * @param {DatabaseImageCreateArgs} args - Arguments to create a DatabaseImage.
     * @example
     * // Create one DatabaseImage
     * const DatabaseImage = await prisma.databaseImage.create({
     *   data: {
     *     // ... data to create a DatabaseImage
     *   }
     * })
     * 
    **/
    create<T extends DatabaseImageCreateArgs>(
      args: SelectSubset<T, DatabaseImageCreateArgs>
    ): CheckSelect<T, Prisma__DatabaseImageClient<DatabaseImage>, Prisma__DatabaseImageClient<DatabaseImageGetPayload<T>>>

    /**
     * Create many DatabaseImages.
     *     @param {DatabaseImageCreateManyArgs} args - Arguments to create many DatabaseImages.
     *     @example
     *     // Create many DatabaseImages
     *     const databaseImage = await prisma.databaseImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DatabaseImageCreateManyArgs>(
      args?: SelectSubset<T, DatabaseImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DatabaseImage.
     * @param {DatabaseImageDeleteArgs} args - Arguments to delete one DatabaseImage.
     * @example
     * // Delete one DatabaseImage
     * const DatabaseImage = await prisma.databaseImage.delete({
     *   where: {
     *     // ... filter to delete one DatabaseImage
     *   }
     * })
     * 
    **/
    delete<T extends DatabaseImageDeleteArgs>(
      args: SelectSubset<T, DatabaseImageDeleteArgs>
    ): CheckSelect<T, Prisma__DatabaseImageClient<DatabaseImage>, Prisma__DatabaseImageClient<DatabaseImageGetPayload<T>>>

    /**
     * Update one DatabaseImage.
     * @param {DatabaseImageUpdateArgs} args - Arguments to update one DatabaseImage.
     * @example
     * // Update one DatabaseImage
     * const databaseImage = await prisma.databaseImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DatabaseImageUpdateArgs>(
      args: SelectSubset<T, DatabaseImageUpdateArgs>
    ): CheckSelect<T, Prisma__DatabaseImageClient<DatabaseImage>, Prisma__DatabaseImageClient<DatabaseImageGetPayload<T>>>

    /**
     * Delete zero or more DatabaseImages.
     * @param {DatabaseImageDeleteManyArgs} args - Arguments to filter DatabaseImages to delete.
     * @example
     * // Delete a few DatabaseImages
     * const { count } = await prisma.databaseImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DatabaseImageDeleteManyArgs>(
      args?: SelectSubset<T, DatabaseImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatabaseImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatabaseImages
     * const databaseImage = await prisma.databaseImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DatabaseImageUpdateManyArgs>(
      args: SelectSubset<T, DatabaseImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DatabaseImage.
     * @param {DatabaseImageUpsertArgs} args - Arguments to update or create a DatabaseImage.
     * @example
     * // Update or create a DatabaseImage
     * const databaseImage = await prisma.databaseImage.upsert({
     *   create: {
     *     // ... data to create a DatabaseImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatabaseImage we want to update
     *   }
     * })
    **/
    upsert<T extends DatabaseImageUpsertArgs>(
      args: SelectSubset<T, DatabaseImageUpsertArgs>
    ): CheckSelect<T, Prisma__DatabaseImageClient<DatabaseImage>, Prisma__DatabaseImageClient<DatabaseImageGetPayload<T>>>

    /**
     * Count the number of DatabaseImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseImageCountArgs} args - Arguments to filter DatabaseImages to count.
     * @example
     * // Count the number of DatabaseImages
     * const count = await prisma.databaseImage.count({
     *   where: {
     *     // ... the filter for the DatabaseImages we want to count
     *   }
     * })
    **/
    count<T extends DatabaseImageCountArgs>(
      args?: Subset<T, DatabaseImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatabaseImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatabaseImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatabaseImageAggregateArgs>(args: Subset<T, DatabaseImageAggregateArgs>): PrismaPromise<GetDatabaseImageAggregateType<T>>

    /**
     * Group by DatabaseImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatabaseImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatabaseImageGroupByArgs['orderBy'] }
        : { orderBy?: DatabaseImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatabaseImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabaseImageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatabaseImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DatabaseImageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    targetManga<T extends DatabaseMangaArgs = {}>(args?: Subset<T, DatabaseMangaArgs>): CheckSelect<T, Prisma__DatabaseMangaClient<DatabaseManga | null >, Prisma__DatabaseMangaClient<DatabaseMangaGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * DatabaseImage findUnique
   */
  export type DatabaseImageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the DatabaseImage
     * 
    **/
    select?: DatabaseImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseImageInclude | null
    /**
     * Throw an Error if a DatabaseImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DatabaseImage to fetch.
     * 
    **/
    where: DatabaseImageWhereUniqueInput
  }


  /**
   * DatabaseImage findFirst
   */
  export type DatabaseImageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the DatabaseImage
     * 
    **/
    select?: DatabaseImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseImageInclude | null
    /**
     * Throw an Error if a DatabaseImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DatabaseImage to fetch.
     * 
    **/
    where?: DatabaseImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseImages to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatabaseImages.
     * 
    **/
    cursor?: DatabaseImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatabaseImages.
     * 
    **/
    distinct?: Enumerable<DatabaseImageScalarFieldEnum>
  }


  /**
   * DatabaseImage findMany
   */
  export type DatabaseImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the DatabaseImage
     * 
    **/
    select?: DatabaseImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseImageInclude | null
    /**
     * Filter, which DatabaseImages to fetch.
     * 
    **/
    where?: DatabaseImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseImages to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatabaseImages.
     * 
    **/
    cursor?: DatabaseImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseImages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DatabaseImageScalarFieldEnum>
  }


  /**
   * DatabaseImage create
   */
  export type DatabaseImageCreateArgs = {
    /**
     * Select specific fields to fetch from the DatabaseImage
     * 
    **/
    select?: DatabaseImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseImageInclude | null
    /**
     * The data needed to create a DatabaseImage.
     * 
    **/
    data: XOR<DatabaseImageCreateInput, DatabaseImageUncheckedCreateInput>
  }


  /**
   * DatabaseImage createMany
   */
  export type DatabaseImageCreateManyArgs = {
    /**
     * The data used to create many DatabaseImages.
     * 
    **/
    data: Enumerable<DatabaseImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DatabaseImage update
   */
  export type DatabaseImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the DatabaseImage
     * 
    **/
    select?: DatabaseImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseImageInclude | null
    /**
     * The data needed to update a DatabaseImage.
     * 
    **/
    data: XOR<DatabaseImageUpdateInput, DatabaseImageUncheckedUpdateInput>
    /**
     * Choose, which DatabaseImage to update.
     * 
    **/
    where: DatabaseImageWhereUniqueInput
  }


  /**
   * DatabaseImage updateMany
   */
  export type DatabaseImageUpdateManyArgs = {
    /**
     * The data used to update DatabaseImages.
     * 
    **/
    data: XOR<DatabaseImageUpdateManyMutationInput, DatabaseImageUncheckedUpdateManyInput>
    /**
     * Filter which DatabaseImages to update
     * 
    **/
    where?: DatabaseImageWhereInput
  }


  /**
   * DatabaseImage upsert
   */
  export type DatabaseImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the DatabaseImage
     * 
    **/
    select?: DatabaseImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseImageInclude | null
    /**
     * The filter to search for the DatabaseImage to update in case it exists.
     * 
    **/
    where: DatabaseImageWhereUniqueInput
    /**
     * In case the DatabaseImage found by the `where` argument doesn't exist, create a new DatabaseImage with this data.
     * 
    **/
    create: XOR<DatabaseImageCreateInput, DatabaseImageUncheckedCreateInput>
    /**
     * In case the DatabaseImage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DatabaseImageUpdateInput, DatabaseImageUncheckedUpdateInput>
  }


  /**
   * DatabaseImage delete
   */
  export type DatabaseImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the DatabaseImage
     * 
    **/
    select?: DatabaseImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseImageInclude | null
    /**
     * Filter which DatabaseImage to delete.
     * 
    **/
    where: DatabaseImageWhereUniqueInput
  }


  /**
   * DatabaseImage deleteMany
   */
  export type DatabaseImageDeleteManyArgs = {
    /**
     * Filter which DatabaseImages to delete
     * 
    **/
    where?: DatabaseImageWhereInput
  }


  /**
   * DatabaseImage without action
   */
  export type DatabaseImageArgs = {
    /**
     * Select specific fields to fetch from the DatabaseImage
     * 
    **/
    select?: DatabaseImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseImageInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DatabaseUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    emailConfirmed: 'emailConfirmed',
    password: 'password'
  };

  export type DatabaseUserScalarFieldEnum = (typeof DatabaseUserScalarFieldEnum)[keyof typeof DatabaseUserScalarFieldEnum]


  export const DatabasePasswordResetScalarFieldEnum: {
    id: 'id',
    email: 'email',
    code: 'code',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type DatabasePasswordResetScalarFieldEnum = (typeof DatabasePasswordResetScalarFieldEnum)[keyof typeof DatabasePasswordResetScalarFieldEnum]


  export const DatabaseMangaScalarFieldEnum: {
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
  };

  export type DatabaseMangaScalarFieldEnum = (typeof DatabaseMangaScalarFieldEnum)[keyof typeof DatabaseMangaScalarFieldEnum]


  export const DatabaseImageScalarFieldEnum: {
    id: 'id',
    originalSrc: 'originalSrc',
    originalAspectRatio: 'originalAspectRatio',
    targetId: 'targetId'
  };

  export type DatabaseImageScalarFieldEnum = (typeof DatabaseImageScalarFieldEnum)[keyof typeof DatabaseImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type DatabaseUserWhereInput = {
    AND?: Enumerable<DatabaseUserWhereInput>
    OR?: Enumerable<DatabaseUserWhereInput>
    NOT?: Enumerable<DatabaseUserWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    email?: StringFilter | string
    emailConfirmed?: BoolFilter | boolean
    password?: StringFilter | string
    passwordResets?: DatabasePasswordResetListRelationFilter
  }

  export type DatabaseUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailConfirmed?: SortOrder
    password?: SortOrder
    passwordResets?: DatabasePasswordResetOrderByRelationAggregateInput
  }

  export type DatabaseUserWhereUniqueInput = {
    id?: string
    username?: string
    email?: string
  }

  export type DatabaseUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailConfirmed?: SortOrder
    password?: SortOrder
    _count?: DatabaseUserCountOrderByAggregateInput
    _max?: DatabaseUserMaxOrderByAggregateInput
    _min?: DatabaseUserMinOrderByAggregateInput
  }

  export type DatabaseUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DatabaseUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<DatabaseUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DatabaseUserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    emailConfirmed?: BoolWithAggregatesFilter | boolean
    password?: StringWithAggregatesFilter | string
  }

  export type DatabasePasswordResetWhereInput = {
    AND?: Enumerable<DatabasePasswordResetWhereInput>
    OR?: Enumerable<DatabasePasswordResetWhereInput>
    NOT?: Enumerable<DatabasePasswordResetWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    code?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    userId?: StringFilter | string
    user?: XOR<DatabaseUserRelationFilter, DatabaseUserWhereInput>
  }

  export type DatabasePasswordResetOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: DatabaseUserOrderByWithRelationInput
  }

  export type DatabasePasswordResetWhereUniqueInput = {
    id?: string
    code?: string
  }

  export type DatabasePasswordResetOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: DatabasePasswordResetCountOrderByAggregateInput
    _max?: DatabasePasswordResetMaxOrderByAggregateInput
    _min?: DatabasePasswordResetMinOrderByAggregateInput
  }

  export type DatabasePasswordResetScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DatabasePasswordResetScalarWhereWithAggregatesInput>
    OR?: Enumerable<DatabasePasswordResetScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DatabasePasswordResetScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    code?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: StringWithAggregatesFilter | string
  }

  export type DatabaseMangaWhereInput = {
    AND?: Enumerable<DatabaseMangaWhereInput>
    OR?: Enumerable<DatabaseMangaWhereInput>
    NOT?: Enumerable<DatabaseMangaWhereInput>
    id?: StringFilter | string
    source?: EnumDatabaseMangaSourceFilter | DatabaseMangaSource
    sourceId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    originalName?: StringFilter | string
    uaName?: StringNullableFilter | string | null
    description?: StringFilter | string
    type?: EnumDatabaseMangaTypeFilter | DatabaseMangaType
    releaseDate?: DateTimeNullableFilter | Date | string | null
    finishDate?: DateTimeNullableFilter | Date | string | null
    posters?: DatabaseImageListRelationFilter
  }

  export type DatabaseMangaOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    originalName?: SortOrder
    uaName?: SortOrder
    description?: SortOrder
    type?: SortOrder
    releaseDate?: SortOrder
    finishDate?: SortOrder
    posters?: DatabaseImageOrderByRelationAggregateInput
  }

  export type DatabaseMangaWhereUniqueInput = {
    id?: string
    sourceIdentifier?: DatabaseMangaSourceIdentifierCompoundUniqueInput
  }

  export type DatabaseMangaOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    originalName?: SortOrder
    uaName?: SortOrder
    description?: SortOrder
    type?: SortOrder
    releaseDate?: SortOrder
    finishDate?: SortOrder
    _count?: DatabaseMangaCountOrderByAggregateInput
    _max?: DatabaseMangaMaxOrderByAggregateInput
    _min?: DatabaseMangaMinOrderByAggregateInput
  }

  export type DatabaseMangaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DatabaseMangaScalarWhereWithAggregatesInput>
    OR?: Enumerable<DatabaseMangaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DatabaseMangaScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    source?: EnumDatabaseMangaSourceWithAggregatesFilter | DatabaseMangaSource
    sourceId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    originalName?: StringWithAggregatesFilter | string
    uaName?: StringNullableWithAggregatesFilter | string | null
    description?: StringWithAggregatesFilter | string
    type?: EnumDatabaseMangaTypeWithAggregatesFilter | DatabaseMangaType
    releaseDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    finishDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type DatabaseImageWhereInput = {
    AND?: Enumerable<DatabaseImageWhereInput>
    OR?: Enumerable<DatabaseImageWhereInput>
    NOT?: Enumerable<DatabaseImageWhereInput>
    id?: StringFilter | string
    originalSrc?: StringFilter | string
    originalAspectRatio?: FloatFilter | number
    targetId?: StringFilter | string
    targetManga?: XOR<DatabaseMangaRelationFilter, DatabaseMangaWhereInput> | null
  }

  export type DatabaseImageOrderByWithRelationInput = {
    id?: SortOrder
    originalSrc?: SortOrder
    originalAspectRatio?: SortOrder
    targetId?: SortOrder
    targetManga?: DatabaseMangaOrderByWithRelationInput
  }

  export type DatabaseImageWhereUniqueInput = {
    id?: string
  }

  export type DatabaseImageOrderByWithAggregationInput = {
    id?: SortOrder
    originalSrc?: SortOrder
    originalAspectRatio?: SortOrder
    targetId?: SortOrder
    _count?: DatabaseImageCountOrderByAggregateInput
    _avg?: DatabaseImageAvgOrderByAggregateInput
    _max?: DatabaseImageMaxOrderByAggregateInput
    _min?: DatabaseImageMinOrderByAggregateInput
    _sum?: DatabaseImageSumOrderByAggregateInput
  }

  export type DatabaseImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DatabaseImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<DatabaseImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DatabaseImageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    originalSrc?: StringWithAggregatesFilter | string
    originalAspectRatio?: FloatWithAggregatesFilter | number
    targetId?: StringWithAggregatesFilter | string
  }

  export type DatabaseUserCreateInput = {
    id?: string
    username: string
    email: string
    emailConfirmed?: boolean
    password: string
    passwordResets?: DatabasePasswordResetCreateNestedManyWithoutUserInput
  }

  export type DatabaseUserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    emailConfirmed?: boolean
    password: string
    passwordResets?: DatabasePasswordResetUncheckedCreateNestedManyWithoutUserInput
  }

  export type DatabaseUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    passwordResets?: DatabasePasswordResetUpdateManyWithoutUserInput
  }

  export type DatabaseUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    passwordResets?: DatabasePasswordResetUncheckedUpdateManyWithoutUserInput
  }

  export type DatabaseUserCreateManyInput = {
    id?: string
    username: string
    email: string
    emailConfirmed?: boolean
    password: string
  }

  export type DatabaseUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DatabasePasswordResetCreateInput = {
    id?: string
    email: string
    code: string
    createdAt?: Date | string
    user: DatabaseUserCreateNestedOneWithoutPasswordResetsInput
  }

  export type DatabasePasswordResetUncheckedCreateInput = {
    id?: string
    email: string
    code: string
    createdAt?: Date | string
    userId: string
  }

  export type DatabasePasswordResetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: DatabaseUserUpdateOneRequiredWithoutPasswordResetsInput
  }

  export type DatabasePasswordResetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DatabasePasswordResetCreateManyInput = {
    id?: string
    email: string
    code: string
    createdAt?: Date | string
    userId: string
  }

  export type DatabasePasswordResetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatabasePasswordResetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseMangaCreateInput = {
    id?: string
    source: DatabaseMangaSource
    sourceId: string
    createdAt?: Date | string
    originalName: string
    uaName?: string | null
    description: string
    type: DatabaseMangaType
    releaseDate?: Date | string | null
    finishDate?: Date | string | null
    posters?: DatabaseImageCreateNestedManyWithoutTargetMangaInput
  }

  export type DatabaseMangaUncheckedCreateInput = {
    id?: string
    source: DatabaseMangaSource
    sourceId: string
    createdAt?: Date | string
    originalName: string
    uaName?: string | null
    description: string
    type: DatabaseMangaType
    releaseDate?: Date | string | null
    finishDate?: Date | string | null
    posters?: DatabaseImageUncheckedCreateNestedManyWithoutTargetMangaInput
  }

  export type DatabaseMangaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumDatabaseMangaSourceFieldUpdateOperationsInput | DatabaseMangaSource
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    uaName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumDatabaseMangaTypeFieldUpdateOperationsInput | DatabaseMangaType
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posters?: DatabaseImageUpdateManyWithoutTargetMangaInput
  }

  export type DatabaseMangaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumDatabaseMangaSourceFieldUpdateOperationsInput | DatabaseMangaSource
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    uaName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumDatabaseMangaTypeFieldUpdateOperationsInput | DatabaseMangaType
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posters?: DatabaseImageUncheckedUpdateManyWithoutTargetMangaInput
  }

  export type DatabaseMangaCreateManyInput = {
    id?: string
    source: DatabaseMangaSource
    sourceId: string
    createdAt?: Date | string
    originalName: string
    uaName?: string | null
    description: string
    type: DatabaseMangaType
    releaseDate?: Date | string | null
    finishDate?: Date | string | null
  }

  export type DatabaseMangaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumDatabaseMangaSourceFieldUpdateOperationsInput | DatabaseMangaSource
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    uaName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumDatabaseMangaTypeFieldUpdateOperationsInput | DatabaseMangaType
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatabaseMangaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumDatabaseMangaSourceFieldUpdateOperationsInput | DatabaseMangaSource
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    uaName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumDatabaseMangaTypeFieldUpdateOperationsInput | DatabaseMangaType
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatabaseImageCreateInput = {
    id?: string
    originalSrc: string
    originalAspectRatio: number
    targetManga?: DatabaseMangaCreateNestedOneWithoutPostersInput
  }

  export type DatabaseImageUncheckedCreateInput = {
    id?: string
    originalSrc: string
    originalAspectRatio: number
    targetId: string
  }

  export type DatabaseImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalSrc?: StringFieldUpdateOperationsInput | string
    originalAspectRatio?: FloatFieldUpdateOperationsInput | number
    targetManga?: DatabaseMangaUpdateOneWithoutPostersInput
  }

  export type DatabaseImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalSrc?: StringFieldUpdateOperationsInput | string
    originalAspectRatio?: FloatFieldUpdateOperationsInput | number
    targetId?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseImageCreateManyInput = {
    id?: string
    originalSrc: string
    originalAspectRatio: number
    targetId: string
  }

  export type DatabaseImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalSrc?: StringFieldUpdateOperationsInput | string
    originalAspectRatio?: FloatFieldUpdateOperationsInput | number
  }

  export type DatabaseImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalSrc?: StringFieldUpdateOperationsInput | string
    originalAspectRatio?: FloatFieldUpdateOperationsInput | number
    targetId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DatabasePasswordResetListRelationFilter = {
    every?: DatabasePasswordResetWhereInput
    some?: DatabasePasswordResetWhereInput
    none?: DatabasePasswordResetWhereInput
  }

  export type DatabasePasswordResetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatabaseUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailConfirmed?: SortOrder
    password?: SortOrder
  }

  export type DatabaseUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailConfirmed?: SortOrder
    password?: SortOrder
  }

  export type DatabaseUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailConfirmed?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DatabaseUserRelationFilter = {
    is?: DatabaseUserWhereInput
    isNot?: DatabaseUserWhereInput
  }

  export type DatabasePasswordResetCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type DatabasePasswordResetMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type DatabasePasswordResetMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumDatabaseMangaSourceFilter = {
    equals?: DatabaseMangaSource
    in?: Enumerable<DatabaseMangaSource>
    notIn?: Enumerable<DatabaseMangaSource>
    not?: NestedEnumDatabaseMangaSourceFilter | DatabaseMangaSource
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type EnumDatabaseMangaTypeFilter = {
    equals?: DatabaseMangaType
    in?: Enumerable<DatabaseMangaType>
    notIn?: Enumerable<DatabaseMangaType>
    not?: NestedEnumDatabaseMangaTypeFilter | DatabaseMangaType
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DatabaseImageListRelationFilter = {
    every?: DatabaseImageWhereInput
    some?: DatabaseImageWhereInput
    none?: DatabaseImageWhereInput
  }

  export type DatabaseImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatabaseMangaSourceIdentifierCompoundUniqueInput = {
    source: DatabaseMangaSource
    sourceId: string
  }

  export type DatabaseMangaCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    originalName?: SortOrder
    uaName?: SortOrder
    description?: SortOrder
    type?: SortOrder
    releaseDate?: SortOrder
    finishDate?: SortOrder
  }

  export type DatabaseMangaMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    originalName?: SortOrder
    uaName?: SortOrder
    description?: SortOrder
    type?: SortOrder
    releaseDate?: SortOrder
    finishDate?: SortOrder
  }

  export type DatabaseMangaMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    originalName?: SortOrder
    uaName?: SortOrder
    description?: SortOrder
    type?: SortOrder
    releaseDate?: SortOrder
    finishDate?: SortOrder
  }

  export type EnumDatabaseMangaSourceWithAggregatesFilter = {
    equals?: DatabaseMangaSource
    in?: Enumerable<DatabaseMangaSource>
    notIn?: Enumerable<DatabaseMangaSource>
    not?: NestedEnumDatabaseMangaSourceWithAggregatesFilter | DatabaseMangaSource
    _count?: NestedIntFilter
    _min?: NestedEnumDatabaseMangaSourceFilter
    _max?: NestedEnumDatabaseMangaSourceFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumDatabaseMangaTypeWithAggregatesFilter = {
    equals?: DatabaseMangaType
    in?: Enumerable<DatabaseMangaType>
    notIn?: Enumerable<DatabaseMangaType>
    not?: NestedEnumDatabaseMangaTypeWithAggregatesFilter | DatabaseMangaType
    _count?: NestedIntFilter
    _min?: NestedEnumDatabaseMangaTypeFilter
    _max?: NestedEnumDatabaseMangaTypeFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type DatabaseMangaRelationFilter = {
    is?: DatabaseMangaWhereInput | null
    isNot?: DatabaseMangaWhereInput | null
  }

  export type DatabaseImageCountOrderByAggregateInput = {
    id?: SortOrder
    originalSrc?: SortOrder
    originalAspectRatio?: SortOrder
    targetId?: SortOrder
  }

  export type DatabaseImageAvgOrderByAggregateInput = {
    originalAspectRatio?: SortOrder
  }

  export type DatabaseImageMaxOrderByAggregateInput = {
    id?: SortOrder
    originalSrc?: SortOrder
    originalAspectRatio?: SortOrder
    targetId?: SortOrder
  }

  export type DatabaseImageMinOrderByAggregateInput = {
    id?: SortOrder
    originalSrc?: SortOrder
    originalAspectRatio?: SortOrder
    targetId?: SortOrder
  }

  export type DatabaseImageSumOrderByAggregateInput = {
    originalAspectRatio?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type DatabasePasswordResetCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<DatabasePasswordResetCreateWithoutUserInput>, Enumerable<DatabasePasswordResetUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DatabasePasswordResetCreateOrConnectWithoutUserInput>
    createMany?: DatabasePasswordResetCreateManyUserInputEnvelope
    connect?: Enumerable<DatabasePasswordResetWhereUniqueInput>
  }

  export type DatabasePasswordResetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<DatabasePasswordResetCreateWithoutUserInput>, Enumerable<DatabasePasswordResetUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DatabasePasswordResetCreateOrConnectWithoutUserInput>
    createMany?: DatabasePasswordResetCreateManyUserInputEnvelope
    connect?: Enumerable<DatabasePasswordResetWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DatabasePasswordResetUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<DatabasePasswordResetCreateWithoutUserInput>, Enumerable<DatabasePasswordResetUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DatabasePasswordResetCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<DatabasePasswordResetUpsertWithWhereUniqueWithoutUserInput>
    createMany?: DatabasePasswordResetCreateManyUserInputEnvelope
    set?: Enumerable<DatabasePasswordResetWhereUniqueInput>
    disconnect?: Enumerable<DatabasePasswordResetWhereUniqueInput>
    delete?: Enumerable<DatabasePasswordResetWhereUniqueInput>
    connect?: Enumerable<DatabasePasswordResetWhereUniqueInput>
    update?: Enumerable<DatabasePasswordResetUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<DatabasePasswordResetUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<DatabasePasswordResetScalarWhereInput>
  }

  export type DatabasePasswordResetUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<DatabasePasswordResetCreateWithoutUserInput>, Enumerable<DatabasePasswordResetUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DatabasePasswordResetCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<DatabasePasswordResetUpsertWithWhereUniqueWithoutUserInput>
    createMany?: DatabasePasswordResetCreateManyUserInputEnvelope
    set?: Enumerable<DatabasePasswordResetWhereUniqueInput>
    disconnect?: Enumerable<DatabasePasswordResetWhereUniqueInput>
    delete?: Enumerable<DatabasePasswordResetWhereUniqueInput>
    connect?: Enumerable<DatabasePasswordResetWhereUniqueInput>
    update?: Enumerable<DatabasePasswordResetUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<DatabasePasswordResetUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<DatabasePasswordResetScalarWhereInput>
  }

  export type DatabaseUserCreateNestedOneWithoutPasswordResetsInput = {
    create?: XOR<DatabaseUserCreateWithoutPasswordResetsInput, DatabaseUserUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: DatabaseUserCreateOrConnectWithoutPasswordResetsInput
    connect?: DatabaseUserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DatabaseUserUpdateOneRequiredWithoutPasswordResetsInput = {
    create?: XOR<DatabaseUserCreateWithoutPasswordResetsInput, DatabaseUserUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: DatabaseUserCreateOrConnectWithoutPasswordResetsInput
    upsert?: DatabaseUserUpsertWithoutPasswordResetsInput
    connect?: DatabaseUserWhereUniqueInput
    update?: XOR<DatabaseUserUpdateWithoutPasswordResetsInput, DatabaseUserUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type DatabaseImageCreateNestedManyWithoutTargetMangaInput = {
    create?: XOR<Enumerable<DatabaseImageCreateWithoutTargetMangaInput>, Enumerable<DatabaseImageUncheckedCreateWithoutTargetMangaInput>>
    connectOrCreate?: Enumerable<DatabaseImageCreateOrConnectWithoutTargetMangaInput>
    createMany?: DatabaseImageCreateManyTargetMangaInputEnvelope
    connect?: Enumerable<DatabaseImageWhereUniqueInput>
  }

  export type DatabaseImageUncheckedCreateNestedManyWithoutTargetMangaInput = {
    create?: XOR<Enumerable<DatabaseImageCreateWithoutTargetMangaInput>, Enumerable<DatabaseImageUncheckedCreateWithoutTargetMangaInput>>
    connectOrCreate?: Enumerable<DatabaseImageCreateOrConnectWithoutTargetMangaInput>
    createMany?: DatabaseImageCreateManyTargetMangaInputEnvelope
    connect?: Enumerable<DatabaseImageWhereUniqueInput>
  }

  export type EnumDatabaseMangaSourceFieldUpdateOperationsInput = {
    set?: DatabaseMangaSource
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumDatabaseMangaTypeFieldUpdateOperationsInput = {
    set?: DatabaseMangaType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DatabaseImageUpdateManyWithoutTargetMangaInput = {
    create?: XOR<Enumerable<DatabaseImageCreateWithoutTargetMangaInput>, Enumerable<DatabaseImageUncheckedCreateWithoutTargetMangaInput>>
    connectOrCreate?: Enumerable<DatabaseImageCreateOrConnectWithoutTargetMangaInput>
    upsert?: Enumerable<DatabaseImageUpsertWithWhereUniqueWithoutTargetMangaInput>
    createMany?: DatabaseImageCreateManyTargetMangaInputEnvelope
    set?: Enumerable<DatabaseImageWhereUniqueInput>
    disconnect?: Enumerable<DatabaseImageWhereUniqueInput>
    delete?: Enumerable<DatabaseImageWhereUniqueInput>
    connect?: Enumerable<DatabaseImageWhereUniqueInput>
    update?: Enumerable<DatabaseImageUpdateWithWhereUniqueWithoutTargetMangaInput>
    updateMany?: Enumerable<DatabaseImageUpdateManyWithWhereWithoutTargetMangaInput>
    deleteMany?: Enumerable<DatabaseImageScalarWhereInput>
  }

  export type DatabaseImageUncheckedUpdateManyWithoutTargetMangaInput = {
    create?: XOR<Enumerable<DatabaseImageCreateWithoutTargetMangaInput>, Enumerable<DatabaseImageUncheckedCreateWithoutTargetMangaInput>>
    connectOrCreate?: Enumerable<DatabaseImageCreateOrConnectWithoutTargetMangaInput>
    upsert?: Enumerable<DatabaseImageUpsertWithWhereUniqueWithoutTargetMangaInput>
    createMany?: DatabaseImageCreateManyTargetMangaInputEnvelope
    set?: Enumerable<DatabaseImageWhereUniqueInput>
    disconnect?: Enumerable<DatabaseImageWhereUniqueInput>
    delete?: Enumerable<DatabaseImageWhereUniqueInput>
    connect?: Enumerable<DatabaseImageWhereUniqueInput>
    update?: Enumerable<DatabaseImageUpdateWithWhereUniqueWithoutTargetMangaInput>
    updateMany?: Enumerable<DatabaseImageUpdateManyWithWhereWithoutTargetMangaInput>
    deleteMany?: Enumerable<DatabaseImageScalarWhereInput>
  }

  export type DatabaseMangaCreateNestedOneWithoutPostersInput = {
    create?: XOR<DatabaseMangaCreateWithoutPostersInput, DatabaseMangaUncheckedCreateWithoutPostersInput>
    connectOrCreate?: DatabaseMangaCreateOrConnectWithoutPostersInput
    connect?: DatabaseMangaWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DatabaseMangaUpdateOneWithoutPostersInput = {
    create?: XOR<DatabaseMangaCreateWithoutPostersInput, DatabaseMangaUncheckedCreateWithoutPostersInput>
    connectOrCreate?: DatabaseMangaCreateOrConnectWithoutPostersInput
    upsert?: DatabaseMangaUpsertWithoutPostersInput
    disconnect?: boolean
    delete?: boolean
    connect?: DatabaseMangaWhereUniqueInput
    update?: XOR<DatabaseMangaUpdateWithoutPostersInput, DatabaseMangaUncheckedUpdateWithoutPostersInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumDatabaseMangaSourceFilter = {
    equals?: DatabaseMangaSource
    in?: Enumerable<DatabaseMangaSource>
    notIn?: Enumerable<DatabaseMangaSource>
    not?: NestedEnumDatabaseMangaSourceFilter | DatabaseMangaSource
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumDatabaseMangaTypeFilter = {
    equals?: DatabaseMangaType
    in?: Enumerable<DatabaseMangaType>
    notIn?: Enumerable<DatabaseMangaType>
    not?: NestedEnumDatabaseMangaTypeFilter | DatabaseMangaType
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedEnumDatabaseMangaSourceWithAggregatesFilter = {
    equals?: DatabaseMangaSource
    in?: Enumerable<DatabaseMangaSource>
    notIn?: Enumerable<DatabaseMangaSource>
    not?: NestedEnumDatabaseMangaSourceWithAggregatesFilter | DatabaseMangaSource
    _count?: NestedIntFilter
    _min?: NestedEnumDatabaseMangaSourceFilter
    _max?: NestedEnumDatabaseMangaSourceFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumDatabaseMangaTypeWithAggregatesFilter = {
    equals?: DatabaseMangaType
    in?: Enumerable<DatabaseMangaType>
    notIn?: Enumerable<DatabaseMangaType>
    not?: NestedEnumDatabaseMangaTypeWithAggregatesFilter | DatabaseMangaType
    _count?: NestedIntFilter
    _min?: NestedEnumDatabaseMangaTypeFilter
    _max?: NestedEnumDatabaseMangaTypeFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type DatabasePasswordResetCreateWithoutUserInput = {
    id?: string
    email: string
    code: string
    createdAt?: Date | string
  }

  export type DatabasePasswordResetUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    code: string
    createdAt?: Date | string
  }

  export type DatabasePasswordResetCreateOrConnectWithoutUserInput = {
    where: DatabasePasswordResetWhereUniqueInput
    create: XOR<DatabasePasswordResetCreateWithoutUserInput, DatabasePasswordResetUncheckedCreateWithoutUserInput>
  }

  export type DatabasePasswordResetCreateManyUserInputEnvelope = {
    data: Enumerable<DatabasePasswordResetCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type DatabasePasswordResetUpsertWithWhereUniqueWithoutUserInput = {
    where: DatabasePasswordResetWhereUniqueInput
    update: XOR<DatabasePasswordResetUpdateWithoutUserInput, DatabasePasswordResetUncheckedUpdateWithoutUserInput>
    create: XOR<DatabasePasswordResetCreateWithoutUserInput, DatabasePasswordResetUncheckedCreateWithoutUserInput>
  }

  export type DatabasePasswordResetUpdateWithWhereUniqueWithoutUserInput = {
    where: DatabasePasswordResetWhereUniqueInput
    data: XOR<DatabasePasswordResetUpdateWithoutUserInput, DatabasePasswordResetUncheckedUpdateWithoutUserInput>
  }

  export type DatabasePasswordResetUpdateManyWithWhereWithoutUserInput = {
    where: DatabasePasswordResetScalarWhereInput
    data: XOR<DatabasePasswordResetUpdateManyMutationInput, DatabasePasswordResetUncheckedUpdateManyWithoutPasswordResetsInput>
  }

  export type DatabasePasswordResetScalarWhereInput = {
    AND?: Enumerable<DatabasePasswordResetScalarWhereInput>
    OR?: Enumerable<DatabasePasswordResetScalarWhereInput>
    NOT?: Enumerable<DatabasePasswordResetScalarWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    code?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    userId?: StringFilter | string
  }

  export type DatabaseUserCreateWithoutPasswordResetsInput = {
    id?: string
    username: string
    email: string
    emailConfirmed?: boolean
    password: string
  }

  export type DatabaseUserUncheckedCreateWithoutPasswordResetsInput = {
    id?: string
    username: string
    email: string
    emailConfirmed?: boolean
    password: string
  }

  export type DatabaseUserCreateOrConnectWithoutPasswordResetsInput = {
    where: DatabaseUserWhereUniqueInput
    create: XOR<DatabaseUserCreateWithoutPasswordResetsInput, DatabaseUserUncheckedCreateWithoutPasswordResetsInput>
  }

  export type DatabaseUserUpsertWithoutPasswordResetsInput = {
    update: XOR<DatabaseUserUpdateWithoutPasswordResetsInput, DatabaseUserUncheckedUpdateWithoutPasswordResetsInput>
    create: XOR<DatabaseUserCreateWithoutPasswordResetsInput, DatabaseUserUncheckedCreateWithoutPasswordResetsInput>
  }

  export type DatabaseUserUpdateWithoutPasswordResetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseUserUncheckedUpdateWithoutPasswordResetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseImageCreateWithoutTargetMangaInput = {
    id?: string
    originalSrc: string
    originalAspectRatio: number
  }

  export type DatabaseImageUncheckedCreateWithoutTargetMangaInput = {
    id?: string
    originalSrc: string
    originalAspectRatio: number
  }

  export type DatabaseImageCreateOrConnectWithoutTargetMangaInput = {
    where: DatabaseImageWhereUniqueInput
    create: XOR<DatabaseImageCreateWithoutTargetMangaInput, DatabaseImageUncheckedCreateWithoutTargetMangaInput>
  }

  export type DatabaseImageCreateManyTargetMangaInputEnvelope = {
    data: Enumerable<DatabaseImageCreateManyTargetMangaInput>
    skipDuplicates?: boolean
  }

  export type DatabaseImageUpsertWithWhereUniqueWithoutTargetMangaInput = {
    where: DatabaseImageWhereUniqueInput
    update: XOR<DatabaseImageUpdateWithoutTargetMangaInput, DatabaseImageUncheckedUpdateWithoutTargetMangaInput>
    create: XOR<DatabaseImageCreateWithoutTargetMangaInput, DatabaseImageUncheckedCreateWithoutTargetMangaInput>
  }

  export type DatabaseImageUpdateWithWhereUniqueWithoutTargetMangaInput = {
    where: DatabaseImageWhereUniqueInput
    data: XOR<DatabaseImageUpdateWithoutTargetMangaInput, DatabaseImageUncheckedUpdateWithoutTargetMangaInput>
  }

  export type DatabaseImageUpdateManyWithWhereWithoutTargetMangaInput = {
    where: DatabaseImageScalarWhereInput
    data: XOR<DatabaseImageUpdateManyMutationInput, DatabaseImageUncheckedUpdateManyWithoutPostersInput>
  }

  export type DatabaseImageScalarWhereInput = {
    AND?: Enumerable<DatabaseImageScalarWhereInput>
    OR?: Enumerable<DatabaseImageScalarWhereInput>
    NOT?: Enumerable<DatabaseImageScalarWhereInput>
    id?: StringFilter | string
    originalSrc?: StringFilter | string
    originalAspectRatio?: FloatFilter | number
    targetId?: StringFilter | string
  }

  export type DatabaseMangaCreateWithoutPostersInput = {
    id?: string
    source: DatabaseMangaSource
    sourceId: string
    createdAt?: Date | string
    originalName: string
    uaName?: string | null
    description: string
    type: DatabaseMangaType
    releaseDate?: Date | string | null
    finishDate?: Date | string | null
  }

  export type DatabaseMangaUncheckedCreateWithoutPostersInput = {
    id?: string
    source: DatabaseMangaSource
    sourceId: string
    createdAt?: Date | string
    originalName: string
    uaName?: string | null
    description: string
    type: DatabaseMangaType
    releaseDate?: Date | string | null
    finishDate?: Date | string | null
  }

  export type DatabaseMangaCreateOrConnectWithoutPostersInput = {
    where: DatabaseMangaWhereUniqueInput
    create: XOR<DatabaseMangaCreateWithoutPostersInput, DatabaseMangaUncheckedCreateWithoutPostersInput>
  }

  export type DatabaseMangaUpsertWithoutPostersInput = {
    update: XOR<DatabaseMangaUpdateWithoutPostersInput, DatabaseMangaUncheckedUpdateWithoutPostersInput>
    create: XOR<DatabaseMangaCreateWithoutPostersInput, DatabaseMangaUncheckedCreateWithoutPostersInput>
  }

  export type DatabaseMangaUpdateWithoutPostersInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumDatabaseMangaSourceFieldUpdateOperationsInput | DatabaseMangaSource
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    uaName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumDatabaseMangaTypeFieldUpdateOperationsInput | DatabaseMangaType
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatabaseMangaUncheckedUpdateWithoutPostersInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumDatabaseMangaSourceFieldUpdateOperationsInput | DatabaseMangaSource
    sourceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    uaName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumDatabaseMangaTypeFieldUpdateOperationsInput | DatabaseMangaType
    releaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DatabasePasswordResetCreateManyUserInput = {
    id?: string
    email: string
    code: string
    createdAt?: Date | string
  }

  export type DatabasePasswordResetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatabasePasswordResetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatabasePasswordResetUncheckedUpdateManyWithoutPasswordResetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatabaseImageCreateManyTargetMangaInput = {
    id?: string
    originalSrc: string
    originalAspectRatio: number
  }

  export type DatabaseImageUpdateWithoutTargetMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalSrc?: StringFieldUpdateOperationsInput | string
    originalAspectRatio?: FloatFieldUpdateOperationsInput | number
  }

  export type DatabaseImageUncheckedUpdateWithoutTargetMangaInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalSrc?: StringFieldUpdateOperationsInput | string
    originalAspectRatio?: FloatFieldUpdateOperationsInput | number
  }

  export type DatabaseImageUncheckedUpdateManyWithoutPostersInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalSrc?: StringFieldUpdateOperationsInput | string
    originalAspectRatio?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}