
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
  email: string
  password: string
}

/**
 * Model DatabaseManga
 * 
 */
export type DatabaseManga = {
  id: string
  createdAt: Date
  originalName: string
  uaName: string | null
}


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
   * `prisma.databaseManga`: Exposes CRUD operations for the **DatabaseManga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatabaseMangas
    * const databaseMangas = await prisma.databaseManga.findMany()
    * ```
    */
  get databaseManga(): Prisma.DatabaseMangaDelegate<GlobalReject>;
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
    DatabaseManga: 'DatabaseManga'
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
    email: string | null
    password: string | null
  }

  export type DatabaseUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
  }

  export type DatabaseUserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type DatabaseUserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type DatabaseUserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type DatabaseUserCountAggregateInputType = {
    id?: true
    email?: true
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
    email: string
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
    email?: boolean
    password?: boolean
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
    ? DatabaseUser 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DatabaseUser ? DatabaseUser[P] : never
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
    createdAt: Date | null
    originalName: string | null
    uaName: string | null
  }

  export type DatabaseMangaMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    originalName: string | null
    uaName: string | null
  }

  export type DatabaseMangaCountAggregateOutputType = {
    id: number
    createdAt: number
    originalName: number
    uaName: number
    _all: number
  }


  export type DatabaseMangaMinAggregateInputType = {
    id?: true
    createdAt?: true
    originalName?: true
    uaName?: true
  }

  export type DatabaseMangaMaxAggregateInputType = {
    id?: true
    createdAt?: true
    originalName?: true
    uaName?: true
  }

  export type DatabaseMangaCountAggregateInputType = {
    id?: true
    createdAt?: true
    originalName?: true
    uaName?: true
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
    createdAt: Date
    originalName: string
    uaName: string | null
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
    createdAt?: boolean
    originalName?: boolean
    uaName?: boolean
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
    ? DatabaseManga 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DatabaseManga ? DatabaseManga[P] : never
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
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DatabaseUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type DatabaseUserScalarFieldEnum = (typeof DatabaseUserScalarFieldEnum)[keyof typeof DatabaseUserScalarFieldEnum]


  export const DatabaseMangaScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    originalName: 'originalName',
    uaName: 'uaName'
  };

  export type DatabaseMangaScalarFieldEnum = (typeof DatabaseMangaScalarFieldEnum)[keyof typeof DatabaseMangaScalarFieldEnum]


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
    email?: StringFilter | string
    password?: StringFilter | string
  }

  export type DatabaseUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type DatabaseUserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type DatabaseUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
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
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
  }

  export type DatabaseMangaWhereInput = {
    AND?: Enumerable<DatabaseMangaWhereInput>
    OR?: Enumerable<DatabaseMangaWhereInput>
    NOT?: Enumerable<DatabaseMangaWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    originalName?: StringFilter | string
    uaName?: StringNullableFilter | string | null
  }

  export type DatabaseMangaOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    originalName?: SortOrder
    uaName?: SortOrder
  }

  export type DatabaseMangaWhereUniqueInput = {
    id?: string
  }

  export type DatabaseMangaOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    originalName?: SortOrder
    uaName?: SortOrder
    _count?: DatabaseMangaCountOrderByAggregateInput
    _max?: DatabaseMangaMaxOrderByAggregateInput
    _min?: DatabaseMangaMinOrderByAggregateInput
  }

  export type DatabaseMangaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DatabaseMangaScalarWhereWithAggregatesInput>
    OR?: Enumerable<DatabaseMangaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DatabaseMangaScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    originalName?: StringWithAggregatesFilter | string
    uaName?: StringNullableWithAggregatesFilter | string | null
  }

  export type DatabaseUserCreateInput = {
    id?: string
    email: string
    password: string
  }

  export type DatabaseUserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
  }

  export type DatabaseUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseUserCreateManyInput = {
    id?: string
    email: string
    password: string
  }

  export type DatabaseUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseMangaCreateInput = {
    id?: string
    createdAt?: Date | string
    originalName: string
    uaName?: string | null
  }

  export type DatabaseMangaUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    originalName: string
    uaName?: string | null
  }

  export type DatabaseMangaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    uaName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatabaseMangaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    uaName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatabaseMangaCreateManyInput = {
    id?: string
    createdAt?: Date | string
    originalName: string
    uaName?: string | null
  }

  export type DatabaseMangaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    uaName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatabaseMangaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    uaName?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DatabaseUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type DatabaseUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type DatabaseUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
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

  export type DatabaseMangaCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    originalName?: SortOrder
    uaName?: SortOrder
  }

  export type DatabaseMangaMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    originalName?: SortOrder
    uaName?: SortOrder
  }

  export type DatabaseMangaMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    originalName?: SortOrder
    uaName?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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