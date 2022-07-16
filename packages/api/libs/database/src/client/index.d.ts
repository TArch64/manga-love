
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
 * Model DatabaseUserAction
 * 
 */
export type DatabaseUserAction = {
  id: string
  code: string
  type: DatabaseUserActionType
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

export const DatabaseUserActionType: {
  RESET_PASSWORD: 'RESET_PASSWORD',
  EMAIL_VERIFICATION: 'EMAIL_VERIFICATION'
};

export type DatabaseUserActionType = (typeof DatabaseUserActionType)[keyof typeof DatabaseUserActionType]


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
   * `prisma.databaseUserAction`: Exposes CRUD operations for the **DatabaseUserAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatabaseUserActions
    * const databaseUserActions = await prisma.databaseUserAction.findMany()
    * ```
    */
  get databaseUserAction(): Prisma.DatabaseUserActionDelegate<GlobalReject>;

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.0.0
   * Query Engine version: da41d2bb3406da22087b849f0e911199ba4fbf11
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
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

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
    DatabaseUserAction: 'DatabaseUserAction',
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
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
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
    | 'findRaw'

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
    actions: number
  }

  export type DatabaseUserCountOutputTypeSelect = {
    actions?: boolean
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
    actions?: boolean | DatabaseUserActionFindManyArgs
    _count?: boolean | DatabaseUserCountOutputTypeArgs
  }

  export type DatabaseUserInclude = {
    actions?: boolean | DatabaseUserActionFindManyArgs
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
        P extends 'actions' ? Array < DatabaseUserActionGetPayload<S['include'][P]>>  :
        P extends '_count' ? DatabaseUserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'actions' ? Array < DatabaseUserActionGetPayload<S['select'][P]>>  :
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
     * Find one DatabaseUser that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DatabaseUserFindUniqueOrThrowArgs} args - Arguments to find a DatabaseUser
     * @example
     * // Get one DatabaseUser
     * const databaseUser = await prisma.databaseUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DatabaseUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DatabaseUserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DatabaseUserClient<DatabaseUser>, Prisma__DatabaseUserClient<DatabaseUserGetPayload<T>>>

    /**
     * Find the first DatabaseUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserFindFirstOrThrowArgs} args - Arguments to find a DatabaseUser
     * @example
     * // Get one DatabaseUser
     * const databaseUser = await prisma.databaseUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DatabaseUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DatabaseUserFindFirstOrThrowArgs>
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

    actions<T extends DatabaseUserActionFindManyArgs = {}>(args?: Subset<T, DatabaseUserActionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<DatabaseUserAction>>, PrismaPromise<Array<DatabaseUserActionGetPayload<T>>>>;

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
   * DatabaseUser base type for findUnique actions
   */
  export type DatabaseUserFindUniqueArgsBase = {
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
     * Filter, which DatabaseUser to fetch.
     * 
    **/
    where: DatabaseUserWhereUniqueInput
  }

  /**
   * DatabaseUser: findUnique
   */
  export interface DatabaseUserFindUniqueArgs extends DatabaseUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DatabaseUser base type for findFirst actions
   */
  export type DatabaseUserFindFirstArgsBase = {
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
   * DatabaseUser: findFirst
   */
  export interface DatabaseUserFindFirstArgs extends DatabaseUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * DatabaseUser: findUniqueOrThrow
   */
  export type DatabaseUserFindUniqueOrThrowArgs = DatabaseUserFindUniqueArgsBase
      

  /**
   * DatabaseUser: findFirstOrThrow
   */
  export type DatabaseUserFindFirstOrThrowArgs = DatabaseUserFindFirstArgsBase
      

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
   * Model DatabaseUserAction
   */


  export type AggregateDatabaseUserAction = {
    _count: DatabaseUserActionCountAggregateOutputType | null
    _min: DatabaseUserActionMinAggregateOutputType | null
    _max: DatabaseUserActionMaxAggregateOutputType | null
  }

  export type DatabaseUserActionMinAggregateOutputType = {
    id: string | null
    code: string | null
    type: DatabaseUserActionType | null
    createdAt: Date | null
    userId: string | null
  }

  export type DatabaseUserActionMaxAggregateOutputType = {
    id: string | null
    code: string | null
    type: DatabaseUserActionType | null
    createdAt: Date | null
    userId: string | null
  }

  export type DatabaseUserActionCountAggregateOutputType = {
    id: number
    code: number
    type: number
    createdAt: number
    userId: number
    _all: number
  }


  export type DatabaseUserActionMinAggregateInputType = {
    id?: true
    code?: true
    type?: true
    createdAt?: true
    userId?: true
  }

  export type DatabaseUserActionMaxAggregateInputType = {
    id?: true
    code?: true
    type?: true
    createdAt?: true
    userId?: true
  }

  export type DatabaseUserActionCountAggregateInputType = {
    id?: true
    code?: true
    type?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type DatabaseUserActionAggregateArgs = {
    /**
     * Filter which DatabaseUserAction to aggregate.
     * 
    **/
    where?: DatabaseUserActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseUserActions to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseUserActionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DatabaseUserActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseUserActions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseUserActions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatabaseUserActions
    **/
    _count?: true | DatabaseUserActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatabaseUserActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatabaseUserActionMaxAggregateInputType
  }

  export type GetDatabaseUserActionAggregateType<T extends DatabaseUserActionAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabaseUserAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabaseUserAction[P]>
      : GetScalarType<T[P], AggregateDatabaseUserAction[P]>
  }




  export type DatabaseUserActionGroupByArgs = {
    where?: DatabaseUserActionWhereInput
    orderBy?: Enumerable<DatabaseUserActionOrderByWithAggregationInput>
    by: Array<DatabaseUserActionScalarFieldEnum>
    having?: DatabaseUserActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatabaseUserActionCountAggregateInputType | true
    _min?: DatabaseUserActionMinAggregateInputType
    _max?: DatabaseUserActionMaxAggregateInputType
  }


  export type DatabaseUserActionGroupByOutputType = {
    id: string
    code: string
    type: DatabaseUserActionType
    createdAt: Date
    userId: string
    _count: DatabaseUserActionCountAggregateOutputType | null
    _min: DatabaseUserActionMinAggregateOutputType | null
    _max: DatabaseUserActionMaxAggregateOutputType | null
  }

  type GetDatabaseUserActionGroupByPayload<T extends DatabaseUserActionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DatabaseUserActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatabaseUserActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatabaseUserActionGroupByOutputType[P]>
            : GetScalarType<T[P], DatabaseUserActionGroupByOutputType[P]>
        }
      >
    >


  export type DatabaseUserActionSelect = {
    id?: boolean
    code?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | DatabaseUserArgs
  }

  export type DatabaseUserActionInclude = {
    user?: boolean | DatabaseUserArgs
  }

  export type DatabaseUserActionGetPayload<
    S extends boolean | null | undefined | DatabaseUserActionArgs,
    U = keyof S
      > = S extends true
        ? DatabaseUserAction
    : S extends undefined
    ? never
    : S extends DatabaseUserActionArgs | DatabaseUserActionFindManyArgs
    ?'include' extends U
    ? DatabaseUserAction  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? DatabaseUserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? DatabaseUserGetPayload<S['select'][P]> :  P extends keyof DatabaseUserAction ? DatabaseUserAction[P] : never
  } 
    : DatabaseUserAction
  : DatabaseUserAction


  type DatabaseUserActionCountArgs = Merge<
    Omit<DatabaseUserActionFindManyArgs, 'select' | 'include'> & {
      select?: DatabaseUserActionCountAggregateInputType | true
    }
  >

  export interface DatabaseUserActionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one DatabaseUserAction that matches the filter.
     * @param {DatabaseUserActionFindUniqueArgs} args - Arguments to find a DatabaseUserAction
     * @example
     * // Get one DatabaseUserAction
     * const databaseUserAction = await prisma.databaseUserAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DatabaseUserActionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DatabaseUserActionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DatabaseUserAction'> extends True ? CheckSelect<T, Prisma__DatabaseUserActionClient<DatabaseUserAction>, Prisma__DatabaseUserActionClient<DatabaseUserActionGetPayload<T>>> : CheckSelect<T, Prisma__DatabaseUserActionClient<DatabaseUserAction | null >, Prisma__DatabaseUserActionClient<DatabaseUserActionGetPayload<T> | null >>

    /**
     * Find the first DatabaseUserAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserActionFindFirstArgs} args - Arguments to find a DatabaseUserAction
     * @example
     * // Get one DatabaseUserAction
     * const databaseUserAction = await prisma.databaseUserAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DatabaseUserActionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DatabaseUserActionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DatabaseUserAction'> extends True ? CheckSelect<T, Prisma__DatabaseUserActionClient<DatabaseUserAction>, Prisma__DatabaseUserActionClient<DatabaseUserActionGetPayload<T>>> : CheckSelect<T, Prisma__DatabaseUserActionClient<DatabaseUserAction | null >, Prisma__DatabaseUserActionClient<DatabaseUserActionGetPayload<T> | null >>

    /**
     * Find zero or more DatabaseUserActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserActionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatabaseUserActions
     * const databaseUserActions = await prisma.databaseUserAction.findMany()
     * 
     * // Get first 10 DatabaseUserActions
     * const databaseUserActions = await prisma.databaseUserAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const databaseUserActionWithIdOnly = await prisma.databaseUserAction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DatabaseUserActionFindManyArgs>(
      args?: SelectSubset<T, DatabaseUserActionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<DatabaseUserAction>>, PrismaPromise<Array<DatabaseUserActionGetPayload<T>>>>

    /**
     * Create a DatabaseUserAction.
     * @param {DatabaseUserActionCreateArgs} args - Arguments to create a DatabaseUserAction.
     * @example
     * // Create one DatabaseUserAction
     * const DatabaseUserAction = await prisma.databaseUserAction.create({
     *   data: {
     *     // ... data to create a DatabaseUserAction
     *   }
     * })
     * 
    **/
    create<T extends DatabaseUserActionCreateArgs>(
      args: SelectSubset<T, DatabaseUserActionCreateArgs>
    ): CheckSelect<T, Prisma__DatabaseUserActionClient<DatabaseUserAction>, Prisma__DatabaseUserActionClient<DatabaseUserActionGetPayload<T>>>

    /**
     * Create many DatabaseUserActions.
     *     @param {DatabaseUserActionCreateManyArgs} args - Arguments to create many DatabaseUserActions.
     *     @example
     *     // Create many DatabaseUserActions
     *     const databaseUserAction = await prisma.databaseUserAction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DatabaseUserActionCreateManyArgs>(
      args?: SelectSubset<T, DatabaseUserActionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DatabaseUserAction.
     * @param {DatabaseUserActionDeleteArgs} args - Arguments to delete one DatabaseUserAction.
     * @example
     * // Delete one DatabaseUserAction
     * const DatabaseUserAction = await prisma.databaseUserAction.delete({
     *   where: {
     *     // ... filter to delete one DatabaseUserAction
     *   }
     * })
     * 
    **/
    delete<T extends DatabaseUserActionDeleteArgs>(
      args: SelectSubset<T, DatabaseUserActionDeleteArgs>
    ): CheckSelect<T, Prisma__DatabaseUserActionClient<DatabaseUserAction>, Prisma__DatabaseUserActionClient<DatabaseUserActionGetPayload<T>>>

    /**
     * Update one DatabaseUserAction.
     * @param {DatabaseUserActionUpdateArgs} args - Arguments to update one DatabaseUserAction.
     * @example
     * // Update one DatabaseUserAction
     * const databaseUserAction = await prisma.databaseUserAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DatabaseUserActionUpdateArgs>(
      args: SelectSubset<T, DatabaseUserActionUpdateArgs>
    ): CheckSelect<T, Prisma__DatabaseUserActionClient<DatabaseUserAction>, Prisma__DatabaseUserActionClient<DatabaseUserActionGetPayload<T>>>

    /**
     * Delete zero or more DatabaseUserActions.
     * @param {DatabaseUserActionDeleteManyArgs} args - Arguments to filter DatabaseUserActions to delete.
     * @example
     * // Delete a few DatabaseUserActions
     * const { count } = await prisma.databaseUserAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DatabaseUserActionDeleteManyArgs>(
      args?: SelectSubset<T, DatabaseUserActionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatabaseUserActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatabaseUserActions
     * const databaseUserAction = await prisma.databaseUserAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DatabaseUserActionUpdateManyArgs>(
      args: SelectSubset<T, DatabaseUserActionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DatabaseUserAction.
     * @param {DatabaseUserActionUpsertArgs} args - Arguments to update or create a DatabaseUserAction.
     * @example
     * // Update or create a DatabaseUserAction
     * const databaseUserAction = await prisma.databaseUserAction.upsert({
     *   create: {
     *     // ... data to create a DatabaseUserAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatabaseUserAction we want to update
     *   }
     * })
    **/
    upsert<T extends DatabaseUserActionUpsertArgs>(
      args: SelectSubset<T, DatabaseUserActionUpsertArgs>
    ): CheckSelect<T, Prisma__DatabaseUserActionClient<DatabaseUserAction>, Prisma__DatabaseUserActionClient<DatabaseUserActionGetPayload<T>>>

    /**
     * Find one DatabaseUserAction that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DatabaseUserActionFindUniqueOrThrowArgs} args - Arguments to find a DatabaseUserAction
     * @example
     * // Get one DatabaseUserAction
     * const databaseUserAction = await prisma.databaseUserAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DatabaseUserActionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DatabaseUserActionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DatabaseUserActionClient<DatabaseUserAction>, Prisma__DatabaseUserActionClient<DatabaseUserActionGetPayload<T>>>

    /**
     * Find the first DatabaseUserAction that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserActionFindFirstOrThrowArgs} args - Arguments to find a DatabaseUserAction
     * @example
     * // Get one DatabaseUserAction
     * const databaseUserAction = await prisma.databaseUserAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DatabaseUserActionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DatabaseUserActionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__DatabaseUserActionClient<DatabaseUserAction>, Prisma__DatabaseUserActionClient<DatabaseUserActionGetPayload<T>>>

    /**
     * Count the number of DatabaseUserActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserActionCountArgs} args - Arguments to filter DatabaseUserActions to count.
     * @example
     * // Count the number of DatabaseUserActions
     * const count = await prisma.databaseUserAction.count({
     *   where: {
     *     // ... the filter for the DatabaseUserActions we want to count
     *   }
     * })
    **/
    count<T extends DatabaseUserActionCountArgs>(
      args?: Subset<T, DatabaseUserActionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatabaseUserActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatabaseUserAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatabaseUserActionAggregateArgs>(args: Subset<T, DatabaseUserActionAggregateArgs>): PrismaPromise<GetDatabaseUserActionAggregateType<T>>

    /**
     * Group by DatabaseUserAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUserActionGroupByArgs} args - Group by arguments.
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
      T extends DatabaseUserActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatabaseUserActionGroupByArgs['orderBy'] }
        : { orderBy?: DatabaseUserActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DatabaseUserActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabaseUserActionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatabaseUserAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DatabaseUserActionClient<T> implements PrismaPromise<T> {
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
   * DatabaseUserAction base type for findUnique actions
   */
  export type DatabaseUserActionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DatabaseUserAction
     * 
    **/
    select?: DatabaseUserActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserActionInclude | null
    /**
     * Filter, which DatabaseUserAction to fetch.
     * 
    **/
    where: DatabaseUserActionWhereUniqueInput
  }

  /**
   * DatabaseUserAction: findUnique
   */
  export interface DatabaseUserActionFindUniqueArgs extends DatabaseUserActionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DatabaseUserAction base type for findFirst actions
   */
  export type DatabaseUserActionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DatabaseUserAction
     * 
    **/
    select?: DatabaseUserActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserActionInclude | null
    /**
     * Filter, which DatabaseUserAction to fetch.
     * 
    **/
    where?: DatabaseUserActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseUserActions to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseUserActionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatabaseUserActions.
     * 
    **/
    cursor?: DatabaseUserActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseUserActions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseUserActions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatabaseUserActions.
     * 
    **/
    distinct?: Enumerable<DatabaseUserActionScalarFieldEnum>
  }

  /**
   * DatabaseUserAction: findFirst
   */
  export interface DatabaseUserActionFindFirstArgs extends DatabaseUserActionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DatabaseUserAction findMany
   */
  export type DatabaseUserActionFindManyArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUserAction
     * 
    **/
    select?: DatabaseUserActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserActionInclude | null
    /**
     * Filter, which DatabaseUserActions to fetch.
     * 
    **/
    where?: DatabaseUserActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseUserActions to fetch.
     * 
    **/
    orderBy?: Enumerable<DatabaseUserActionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatabaseUserActions.
     * 
    **/
    cursor?: DatabaseUserActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseUserActions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseUserActions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DatabaseUserActionScalarFieldEnum>
  }


  /**
   * DatabaseUserAction create
   */
  export type DatabaseUserActionCreateArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUserAction
     * 
    **/
    select?: DatabaseUserActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserActionInclude | null
    /**
     * The data needed to create a DatabaseUserAction.
     * 
    **/
    data: XOR<DatabaseUserActionCreateInput, DatabaseUserActionUncheckedCreateInput>
  }


  /**
   * DatabaseUserAction createMany
   */
  export type DatabaseUserActionCreateManyArgs = {
    /**
     * The data used to create many DatabaseUserActions.
     * 
    **/
    data: Enumerable<DatabaseUserActionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DatabaseUserAction update
   */
  export type DatabaseUserActionUpdateArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUserAction
     * 
    **/
    select?: DatabaseUserActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserActionInclude | null
    /**
     * The data needed to update a DatabaseUserAction.
     * 
    **/
    data: XOR<DatabaseUserActionUpdateInput, DatabaseUserActionUncheckedUpdateInput>
    /**
     * Choose, which DatabaseUserAction to update.
     * 
    **/
    where: DatabaseUserActionWhereUniqueInput
  }


  /**
   * DatabaseUserAction updateMany
   */
  export type DatabaseUserActionUpdateManyArgs = {
    /**
     * The data used to update DatabaseUserActions.
     * 
    **/
    data: XOR<DatabaseUserActionUpdateManyMutationInput, DatabaseUserActionUncheckedUpdateManyInput>
    /**
     * Filter which DatabaseUserActions to update
     * 
    **/
    where?: DatabaseUserActionWhereInput
  }


  /**
   * DatabaseUserAction upsert
   */
  export type DatabaseUserActionUpsertArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUserAction
     * 
    **/
    select?: DatabaseUserActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserActionInclude | null
    /**
     * The filter to search for the DatabaseUserAction to update in case it exists.
     * 
    **/
    where: DatabaseUserActionWhereUniqueInput
    /**
     * In case the DatabaseUserAction found by the `where` argument doesn't exist, create a new DatabaseUserAction with this data.
     * 
    **/
    create: XOR<DatabaseUserActionCreateInput, DatabaseUserActionUncheckedCreateInput>
    /**
     * In case the DatabaseUserAction was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DatabaseUserActionUpdateInput, DatabaseUserActionUncheckedUpdateInput>
  }


  /**
   * DatabaseUserAction delete
   */
  export type DatabaseUserActionDeleteArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUserAction
     * 
    **/
    select?: DatabaseUserActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserActionInclude | null
    /**
     * Filter which DatabaseUserAction to delete.
     * 
    **/
    where: DatabaseUserActionWhereUniqueInput
  }


  /**
   * DatabaseUserAction deleteMany
   */
  export type DatabaseUserActionDeleteManyArgs = {
    /**
     * Filter which DatabaseUserActions to delete
     * 
    **/
    where?: DatabaseUserActionWhereInput
  }


  /**
   * DatabaseUserAction: findUniqueOrThrow
   */
  export type DatabaseUserActionFindUniqueOrThrowArgs = DatabaseUserActionFindUniqueArgsBase
      

  /**
   * DatabaseUserAction: findFirstOrThrow
   */
  export type DatabaseUserActionFindFirstOrThrowArgs = DatabaseUserActionFindFirstArgsBase
      

  /**
   * DatabaseUserAction without action
   */
  export type DatabaseUserActionArgs = {
    /**
     * Select specific fields to fetch from the DatabaseUserAction
     * 
    **/
    select?: DatabaseUserActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DatabaseUserActionInclude | null
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
     * Find one DatabaseManga that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DatabaseMangaFindUniqueOrThrowArgs} args - Arguments to find a DatabaseManga
     * @example
     * // Get one DatabaseManga
     * const databaseManga = await prisma.databaseManga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DatabaseMangaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DatabaseMangaFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DatabaseMangaClient<DatabaseManga>, Prisma__DatabaseMangaClient<DatabaseMangaGetPayload<T>>>

    /**
     * Find the first DatabaseManga that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMangaFindFirstOrThrowArgs} args - Arguments to find a DatabaseManga
     * @example
     * // Get one DatabaseManga
     * const databaseManga = await prisma.databaseManga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DatabaseMangaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DatabaseMangaFindFirstOrThrowArgs>
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
   * DatabaseManga base type for findUnique actions
   */
  export type DatabaseMangaFindUniqueArgsBase = {
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
     * Filter, which DatabaseManga to fetch.
     * 
    **/
    where: DatabaseMangaWhereUniqueInput
  }

  /**
   * DatabaseManga: findUnique
   */
  export interface DatabaseMangaFindUniqueArgs extends DatabaseMangaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DatabaseManga base type for findFirst actions
   */
  export type DatabaseMangaFindFirstArgsBase = {
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
   * DatabaseManga: findFirst
   */
  export interface DatabaseMangaFindFirstArgs extends DatabaseMangaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * DatabaseManga: findUniqueOrThrow
   */
  export type DatabaseMangaFindUniqueOrThrowArgs = DatabaseMangaFindUniqueArgsBase
      

  /**
   * DatabaseManga: findFirstOrThrow
   */
  export type DatabaseMangaFindFirstOrThrowArgs = DatabaseMangaFindFirstArgsBase
      

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
     * Find one DatabaseImage that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DatabaseImageFindUniqueOrThrowArgs} args - Arguments to find a DatabaseImage
     * @example
     * // Get one DatabaseImage
     * const databaseImage = await prisma.databaseImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DatabaseImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DatabaseImageFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DatabaseImageClient<DatabaseImage>, Prisma__DatabaseImageClient<DatabaseImageGetPayload<T>>>

    /**
     * Find the first DatabaseImage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseImageFindFirstOrThrowArgs} args - Arguments to find a DatabaseImage
     * @example
     * // Get one DatabaseImage
     * const databaseImage = await prisma.databaseImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DatabaseImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DatabaseImageFindFirstOrThrowArgs>
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
   * DatabaseImage base type for findUnique actions
   */
  export type DatabaseImageFindUniqueArgsBase = {
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
     * Filter, which DatabaseImage to fetch.
     * 
    **/
    where: DatabaseImageWhereUniqueInput
  }

  /**
   * DatabaseImage: findUnique
   */
  export interface DatabaseImageFindUniqueArgs extends DatabaseImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DatabaseImage base type for findFirst actions
   */
  export type DatabaseImageFindFirstArgsBase = {
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
   * DatabaseImage: findFirst
   */
  export interface DatabaseImageFindFirstArgs extends DatabaseImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * DatabaseImage: findUniqueOrThrow
   */
  export type DatabaseImageFindUniqueOrThrowArgs = DatabaseImageFindUniqueArgsBase
      

  /**
   * DatabaseImage: findFirstOrThrow
   */
  export type DatabaseImageFindFirstOrThrowArgs = DatabaseImageFindFirstArgsBase
      

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


  export const DatabaseUserActionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    type: 'type',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type DatabaseUserActionScalarFieldEnum = (typeof DatabaseUserActionScalarFieldEnum)[keyof typeof DatabaseUserActionScalarFieldEnum]


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
    actions?: DatabaseUserActionListRelationFilter
  }

  export type DatabaseUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailConfirmed?: SortOrder
    password?: SortOrder
    actions?: DatabaseUserActionOrderByRelationAggregateInput
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

  export type DatabaseUserActionWhereInput = {
    AND?: Enumerable<DatabaseUserActionWhereInput>
    OR?: Enumerable<DatabaseUserActionWhereInput>
    NOT?: Enumerable<DatabaseUserActionWhereInput>
    id?: StringFilter | string
    code?: StringFilter | string
    type?: EnumDatabaseUserActionTypeFilter | DatabaseUserActionType
    createdAt?: DateTimeFilter | Date | string
    userId?: StringFilter | string
    user?: XOR<DatabaseUserRelationFilter, DatabaseUserWhereInput>
  }

  export type DatabaseUserActionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: DatabaseUserOrderByWithRelationInput
  }

  export type DatabaseUserActionWhereUniqueInput = {
    id?: string
    code?: string
  }

  export type DatabaseUserActionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: DatabaseUserActionCountOrderByAggregateInput
    _max?: DatabaseUserActionMaxOrderByAggregateInput
    _min?: DatabaseUserActionMinOrderByAggregateInput
  }

  export type DatabaseUserActionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DatabaseUserActionScalarWhereWithAggregatesInput>
    OR?: Enumerable<DatabaseUserActionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DatabaseUserActionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    code?: StringWithAggregatesFilter | string
    type?: EnumDatabaseUserActionTypeWithAggregatesFilter | DatabaseUserActionType
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
    actions?: DatabaseUserActionCreateNestedManyWithoutUserInput
  }

  export type DatabaseUserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    emailConfirmed?: boolean
    password: string
    actions?: DatabaseUserActionUncheckedCreateNestedManyWithoutUserInput
  }

  export type DatabaseUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    actions?: DatabaseUserActionUpdateManyWithoutUserNestedInput
  }

  export type DatabaseUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    actions?: DatabaseUserActionUncheckedUpdateManyWithoutUserNestedInput
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

  export type DatabaseUserActionCreateInput = {
    id?: string
    code?: string
    type: DatabaseUserActionType
    createdAt?: Date | string
    user: DatabaseUserCreateNestedOneWithoutActionsInput
  }

  export type DatabaseUserActionUncheckedCreateInput = {
    id?: string
    code?: string
    type: DatabaseUserActionType
    createdAt?: Date | string
    userId: string
  }

  export type DatabaseUserActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDatabaseUserActionTypeFieldUpdateOperationsInput | DatabaseUserActionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: DatabaseUserUpdateOneRequiredWithoutActionsNestedInput
  }

  export type DatabaseUserActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDatabaseUserActionTypeFieldUpdateOperationsInput | DatabaseUserActionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseUserActionCreateManyInput = {
    id?: string
    code?: string
    type: DatabaseUserActionType
    createdAt?: Date | string
    userId: string
  }

  export type DatabaseUserActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDatabaseUserActionTypeFieldUpdateOperationsInput | DatabaseUserActionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatabaseUserActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDatabaseUserActionTypeFieldUpdateOperationsInput | DatabaseUserActionType
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
    posters?: DatabaseImageUpdateManyWithoutTargetMangaNestedInput
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
    posters?: DatabaseImageUncheckedUpdateManyWithoutTargetMangaNestedInput
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
    targetManga?: DatabaseMangaUpdateOneWithoutPostersNestedInput
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

  export type DatabaseUserActionListRelationFilter = {
    every?: DatabaseUserActionWhereInput
    some?: DatabaseUserActionWhereInput
    none?: DatabaseUserActionWhereInput
  }

  export type DatabaseUserActionOrderByRelationAggregateInput = {
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

  export type EnumDatabaseUserActionTypeFilter = {
    equals?: DatabaseUserActionType
    in?: Enumerable<DatabaseUserActionType>
    notIn?: Enumerable<DatabaseUserActionType>
    not?: NestedEnumDatabaseUserActionTypeFilter | DatabaseUserActionType
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

  export type DatabaseUserActionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type DatabaseUserActionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type DatabaseUserActionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumDatabaseUserActionTypeWithAggregatesFilter = {
    equals?: DatabaseUserActionType
    in?: Enumerable<DatabaseUserActionType>
    notIn?: Enumerable<DatabaseUserActionType>
    not?: NestedEnumDatabaseUserActionTypeWithAggregatesFilter | DatabaseUserActionType
    _count?: NestedIntFilter
    _min?: NestedEnumDatabaseUserActionTypeFilter
    _max?: NestedEnumDatabaseUserActionTypeFilter
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

  export type DatabaseUserActionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<DatabaseUserActionCreateWithoutUserInput>, Enumerable<DatabaseUserActionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DatabaseUserActionCreateOrConnectWithoutUserInput>
    createMany?: DatabaseUserActionCreateManyUserInputEnvelope
    connect?: Enumerable<DatabaseUserActionWhereUniqueInput>
  }

  export type DatabaseUserActionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<DatabaseUserActionCreateWithoutUserInput>, Enumerable<DatabaseUserActionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DatabaseUserActionCreateOrConnectWithoutUserInput>
    createMany?: DatabaseUserActionCreateManyUserInputEnvelope
    connect?: Enumerable<DatabaseUserActionWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DatabaseUserActionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<DatabaseUserActionCreateWithoutUserInput>, Enumerable<DatabaseUserActionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DatabaseUserActionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<DatabaseUserActionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: DatabaseUserActionCreateManyUserInputEnvelope
    set?: Enumerable<DatabaseUserActionWhereUniqueInput>
    disconnect?: Enumerable<DatabaseUserActionWhereUniqueInput>
    delete?: Enumerable<DatabaseUserActionWhereUniqueInput>
    connect?: Enumerable<DatabaseUserActionWhereUniqueInput>
    update?: Enumerable<DatabaseUserActionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<DatabaseUserActionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<DatabaseUserActionScalarWhereInput>
  }

  export type DatabaseUserActionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<DatabaseUserActionCreateWithoutUserInput>, Enumerable<DatabaseUserActionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DatabaseUserActionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<DatabaseUserActionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: DatabaseUserActionCreateManyUserInputEnvelope
    set?: Enumerable<DatabaseUserActionWhereUniqueInput>
    disconnect?: Enumerable<DatabaseUserActionWhereUniqueInput>
    delete?: Enumerable<DatabaseUserActionWhereUniqueInput>
    connect?: Enumerable<DatabaseUserActionWhereUniqueInput>
    update?: Enumerable<DatabaseUserActionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<DatabaseUserActionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<DatabaseUserActionScalarWhereInput>
  }

  export type DatabaseUserCreateNestedOneWithoutActionsInput = {
    create?: XOR<DatabaseUserCreateWithoutActionsInput, DatabaseUserUncheckedCreateWithoutActionsInput>
    connectOrCreate?: DatabaseUserCreateOrConnectWithoutActionsInput
    connect?: DatabaseUserWhereUniqueInput
  }

  export type EnumDatabaseUserActionTypeFieldUpdateOperationsInput = {
    set?: DatabaseUserActionType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DatabaseUserUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<DatabaseUserCreateWithoutActionsInput, DatabaseUserUncheckedCreateWithoutActionsInput>
    connectOrCreate?: DatabaseUserCreateOrConnectWithoutActionsInput
    upsert?: DatabaseUserUpsertWithoutActionsInput
    connect?: DatabaseUserWhereUniqueInput
    update?: XOR<DatabaseUserUpdateWithoutActionsInput, DatabaseUserUncheckedUpdateWithoutActionsInput>
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

  export type DatabaseImageUpdateManyWithoutTargetMangaNestedInput = {
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

  export type DatabaseImageUncheckedUpdateManyWithoutTargetMangaNestedInput = {
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

  export type DatabaseMangaUpdateOneWithoutPostersNestedInput = {
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

  export type NestedEnumDatabaseUserActionTypeFilter = {
    equals?: DatabaseUserActionType
    in?: Enumerable<DatabaseUserActionType>
    notIn?: Enumerable<DatabaseUserActionType>
    not?: NestedEnumDatabaseUserActionTypeFilter | DatabaseUserActionType
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

  export type NestedEnumDatabaseUserActionTypeWithAggregatesFilter = {
    equals?: DatabaseUserActionType
    in?: Enumerable<DatabaseUserActionType>
    notIn?: Enumerable<DatabaseUserActionType>
    not?: NestedEnumDatabaseUserActionTypeWithAggregatesFilter | DatabaseUserActionType
    _count?: NestedIntFilter
    _min?: NestedEnumDatabaseUserActionTypeFilter
    _max?: NestedEnumDatabaseUserActionTypeFilter
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

  export type DatabaseUserActionCreateWithoutUserInput = {
    id?: string
    code?: string
    type: DatabaseUserActionType
    createdAt?: Date | string
  }

  export type DatabaseUserActionUncheckedCreateWithoutUserInput = {
    id?: string
    code?: string
    type: DatabaseUserActionType
    createdAt?: Date | string
  }

  export type DatabaseUserActionCreateOrConnectWithoutUserInput = {
    where: DatabaseUserActionWhereUniqueInput
    create: XOR<DatabaseUserActionCreateWithoutUserInput, DatabaseUserActionUncheckedCreateWithoutUserInput>
  }

  export type DatabaseUserActionCreateManyUserInputEnvelope = {
    data: Enumerable<DatabaseUserActionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type DatabaseUserActionUpsertWithWhereUniqueWithoutUserInput = {
    where: DatabaseUserActionWhereUniqueInput
    update: XOR<DatabaseUserActionUpdateWithoutUserInput, DatabaseUserActionUncheckedUpdateWithoutUserInput>
    create: XOR<DatabaseUserActionCreateWithoutUserInput, DatabaseUserActionUncheckedCreateWithoutUserInput>
  }

  export type DatabaseUserActionUpdateWithWhereUniqueWithoutUserInput = {
    where: DatabaseUserActionWhereUniqueInput
    data: XOR<DatabaseUserActionUpdateWithoutUserInput, DatabaseUserActionUncheckedUpdateWithoutUserInput>
  }

  export type DatabaseUserActionUpdateManyWithWhereWithoutUserInput = {
    where: DatabaseUserActionScalarWhereInput
    data: XOR<DatabaseUserActionUpdateManyMutationInput, DatabaseUserActionUncheckedUpdateManyWithoutActionsInput>
  }

  export type DatabaseUserActionScalarWhereInput = {
    AND?: Enumerable<DatabaseUserActionScalarWhereInput>
    OR?: Enumerable<DatabaseUserActionScalarWhereInput>
    NOT?: Enumerable<DatabaseUserActionScalarWhereInput>
    id?: StringFilter | string
    code?: StringFilter | string
    type?: EnumDatabaseUserActionTypeFilter | DatabaseUserActionType
    createdAt?: DateTimeFilter | Date | string
    userId?: StringFilter | string
  }

  export type DatabaseUserCreateWithoutActionsInput = {
    id?: string
    username: string
    email: string
    emailConfirmed?: boolean
    password: string
  }

  export type DatabaseUserUncheckedCreateWithoutActionsInput = {
    id?: string
    username: string
    email: string
    emailConfirmed?: boolean
    password: string
  }

  export type DatabaseUserCreateOrConnectWithoutActionsInput = {
    where: DatabaseUserWhereUniqueInput
    create: XOR<DatabaseUserCreateWithoutActionsInput, DatabaseUserUncheckedCreateWithoutActionsInput>
  }

  export type DatabaseUserUpsertWithoutActionsInput = {
    update: XOR<DatabaseUserUpdateWithoutActionsInput, DatabaseUserUncheckedUpdateWithoutActionsInput>
    create: XOR<DatabaseUserCreateWithoutActionsInput, DatabaseUserUncheckedCreateWithoutActionsInput>
  }

  export type DatabaseUserUpdateWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseUserUncheckedUpdateWithoutActionsInput = {
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

  export type DatabaseUserActionCreateManyUserInput = {
    id?: string
    code?: string
    type: DatabaseUserActionType
    createdAt?: Date | string
  }

  export type DatabaseUserActionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDatabaseUserActionTypeFieldUpdateOperationsInput | DatabaseUserActionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatabaseUserActionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDatabaseUserActionTypeFieldUpdateOperationsInput | DatabaseUserActionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatabaseUserActionUncheckedUpdateManyWithoutActionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumDatabaseUserActionTypeFieldUpdateOperationsInput | DatabaseUserActionType
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
  export const dmmf: runtime.BaseDMMF
}