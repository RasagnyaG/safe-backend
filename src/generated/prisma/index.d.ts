
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model SecurityQuestion
 * 
 */
export type SecurityQuestion = $Result.DefaultSelection<Prisma.$SecurityQuestionPayload>
/**
 * Model UserSecurityAnswer
 * 
 */
export type UserSecurityAnswer = $Result.DefaultSelection<Prisma.$UserSecurityAnswerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityQuestion`: Exposes CRUD operations for the **SecurityQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityQuestions
    * const securityQuestions = await prisma.securityQuestion.findMany()
    * ```
    */
  get securityQuestion(): Prisma.SecurityQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSecurityAnswer`: Exposes CRUD operations for the **UserSecurityAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSecurityAnswers
    * const userSecurityAnswers = await prisma.userSecurityAnswer.findMany()
    * ```
    */
  get userSecurityAnswer(): Prisma.UserSecurityAnswerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Device: 'Device',
    SecurityQuestion: 'SecurityQuestion',
    UserSecurityAnswer: 'UserSecurityAnswer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "device" | "securityQuestion" | "userSecurityAnswer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      SecurityQuestion: {
        payload: Prisma.$SecurityQuestionPayload<ExtArgs>
        fields: Prisma.SecurityQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityQuestionPayload>
          }
          findFirst: {
            args: Prisma.SecurityQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityQuestionPayload>
          }
          findMany: {
            args: Prisma.SecurityQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityQuestionPayload>[]
          }
          create: {
            args: Prisma.SecurityQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityQuestionPayload>
          }
          createMany: {
            args: Prisma.SecurityQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityQuestionPayload>[]
          }
          delete: {
            args: Prisma.SecurityQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityQuestionPayload>
          }
          update: {
            args: Prisma.SecurityQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityQuestionPayload>
          }
          deleteMany: {
            args: Prisma.SecurityQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecurityQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityQuestionPayload>[]
          }
          upsert: {
            args: Prisma.SecurityQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityQuestionPayload>
          }
          aggregate: {
            args: Prisma.SecurityQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityQuestion>
          }
          groupBy: {
            args: Prisma.SecurityQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityQuestionCountAggregateOutputType> | number
          }
        }
      }
      UserSecurityAnswer: {
        payload: Prisma.$UserSecurityAnswerPayload<ExtArgs>
        fields: Prisma.UserSecurityAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSecurityAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSecurityAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityAnswerPayload>
          }
          findFirst: {
            args: Prisma.UserSecurityAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSecurityAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityAnswerPayload>
          }
          findMany: {
            args: Prisma.UserSecurityAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityAnswerPayload>[]
          }
          create: {
            args: Prisma.UserSecurityAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityAnswerPayload>
          }
          createMany: {
            args: Prisma.UserSecurityAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSecurityAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityAnswerPayload>[]
          }
          delete: {
            args: Prisma.UserSecurityAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityAnswerPayload>
          }
          update: {
            args: Prisma.UserSecurityAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityAnswerPayload>
          }
          deleteMany: {
            args: Prisma.UserSecurityAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSecurityAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSecurityAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityAnswerPayload>[]
          }
          upsert: {
            args: Prisma.UserSecurityAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSecurityAnswerPayload>
          }
          aggregate: {
            args: Prisma.UserSecurityAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSecurityAnswer>
          }
          groupBy: {
            args: Prisma.UserSecurityAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSecurityAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSecurityAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<UserSecurityAnswerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    device?: DeviceOmit
    securityQuestion?: SecurityQuestionOmit
    userSecurityAnswer?: UserSecurityAnswerOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Devices: number
    SecurityAnswers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Devices?: boolean | UserCountOutputTypeCountDevicesArgs
    SecurityAnswers?: boolean | UserCountOutputTypeCountSecurityAnswersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSecurityAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSecurityAnswerWhereInput
  }


  /**
   * Count Type SecurityQuestionCountOutputType
   */

  export type SecurityQuestionCountOutputType = {
    answers: number
  }

  export type SecurityQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | SecurityQuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * SecurityQuestionCountOutputType without action
   */
  export type SecurityQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityQuestionCountOutputType
     */
    select?: SecurityQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SecurityQuestionCountOutputType without action
   */
  export type SecurityQuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSecurityAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    passcode: string | null
    alternativeEmail: string | null
    alternativePhoneNumber: string | null
    accountNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    passcode: string | null
    alternativeEmail: string | null
    alternativePhoneNumber: string | null
    accountNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phoneNumber: number
    passcode: number
    alternativeEmail: number
    alternativePhoneNumber: number
    accountNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    passcode?: true
    alternativeEmail?: true
    alternativePhoneNumber?: true
    accountNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    passcode?: true
    alternativeEmail?: true
    alternativePhoneNumber?: true
    accountNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phoneNumber?: true
    passcode?: true
    alternativeEmail?: true
    alternativePhoneNumber?: true
    accountNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phoneNumber: string
    passcode: string
    alternativeEmail: string | null
    alternativePhoneNumber: string
    accountNumber: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    passcode?: boolean
    alternativeEmail?: boolean
    alternativePhoneNumber?: boolean
    accountNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Devices?: boolean | User$DevicesArgs<ExtArgs>
    SecurityAnswers?: boolean | User$SecurityAnswersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    passcode?: boolean
    alternativeEmail?: boolean
    alternativePhoneNumber?: boolean
    accountNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    passcode?: boolean
    alternativeEmail?: boolean
    alternativePhoneNumber?: boolean
    accountNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    passcode?: boolean
    alternativeEmail?: boolean
    alternativePhoneNumber?: boolean
    accountNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phoneNumber" | "passcode" | "alternativeEmail" | "alternativePhoneNumber" | "accountNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Devices?: boolean | User$DevicesArgs<ExtArgs>
    SecurityAnswers?: boolean | User$SecurityAnswersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Devices: Prisma.$DevicePayload<ExtArgs>[]
      SecurityAnswers: Prisma.$UserSecurityAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phoneNumber: string
      passcode: string
      alternativeEmail: string | null
      alternativePhoneNumber: string
      accountNumber: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Devices<T extends User$DevicesArgs<ExtArgs> = {}>(args?: Subset<T, User$DevicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SecurityAnswers<T extends User$SecurityAnswersArgs<ExtArgs> = {}>(args?: Subset<T, User$SecurityAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSecurityAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly passcode: FieldRef<"User", 'String'>
    readonly alternativeEmail: FieldRef<"User", 'String'>
    readonly alternativePhoneNumber: FieldRef<"User", 'String'>
    readonly accountNumber: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Devices
   */
  export type User$DevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * User.SecurityAnswers
   */
  export type User$SecurityAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerInclude<ExtArgs> | null
    where?: UserSecurityAnswerWhereInput
    orderBy?: UserSecurityAnswerOrderByWithRelationInput | UserSecurityAnswerOrderByWithRelationInput[]
    cursor?: UserSecurityAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSecurityAnswerScalarFieldEnum | UserSecurityAnswerScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    deviceId: string | null
    userId: string | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    deviceId: string | null
    userId: string | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    deviceId: number
    userId: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    deviceId?: true
    userId?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    deviceId?: true
    userId?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    deviceId?: true
    userId?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    deviceId: string
    userId: string
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceId?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    deviceId?: boolean
    userId?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceId" | "userId", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deviceId: string
      userId: string
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly deviceId: FieldRef<"Device", 'String'>
    readonly userId: FieldRef<"Device", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model SecurityQuestion
   */

  export type AggregateSecurityQuestion = {
    _count: SecurityQuestionCountAggregateOutputType | null
    _min: SecurityQuestionMinAggregateOutputType | null
    _max: SecurityQuestionMaxAggregateOutputType | null
  }

  export type SecurityQuestionMinAggregateOutputType = {
    id: string | null
    question: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SecurityQuestionMaxAggregateOutputType = {
    id: string | null
    question: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SecurityQuestionCountAggregateOutputType = {
    id: number
    question: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SecurityQuestionMinAggregateInputType = {
    id?: true
    question?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SecurityQuestionMaxAggregateInputType = {
    id?: true
    question?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SecurityQuestionCountAggregateInputType = {
    id?: true
    question?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SecurityQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityQuestion to aggregate.
     */
    where?: SecurityQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityQuestions to fetch.
     */
    orderBy?: SecurityQuestionOrderByWithRelationInput | SecurityQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityQuestions
    **/
    _count?: true | SecurityQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityQuestionMaxAggregateInputType
  }

  export type GetSecurityQuestionAggregateType<T extends SecurityQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityQuestion[P]>
      : GetScalarType<T[P], AggregateSecurityQuestion[P]>
  }




  export type SecurityQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityQuestionWhereInput
    orderBy?: SecurityQuestionOrderByWithAggregationInput | SecurityQuestionOrderByWithAggregationInput[]
    by: SecurityQuestionScalarFieldEnum[] | SecurityQuestionScalarFieldEnum
    having?: SecurityQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityQuestionCountAggregateInputType | true
    _min?: SecurityQuestionMinAggregateInputType
    _max?: SecurityQuestionMaxAggregateInputType
  }

  export type SecurityQuestionGroupByOutputType = {
    id: string
    question: string
    createdAt: Date
    updatedAt: Date
    _count: SecurityQuestionCountAggregateOutputType | null
    _min: SecurityQuestionMinAggregateOutputType | null
    _max: SecurityQuestionMaxAggregateOutputType | null
  }

  type GetSecurityQuestionGroupByPayload<T extends SecurityQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityQuestionGroupByOutputType[P]>
        }
      >
    >


  export type SecurityQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    answers?: boolean | SecurityQuestion$answersArgs<ExtArgs>
    _count?: boolean | SecurityQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityQuestion"]>

  export type SecurityQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["securityQuestion"]>

  export type SecurityQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["securityQuestion"]>

  export type SecurityQuestionSelectScalar = {
    id?: boolean
    question?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SecurityQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "createdAt" | "updatedAt", ExtArgs["result"]["securityQuestion"]>
  export type SecurityQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | SecurityQuestion$answersArgs<ExtArgs>
    _count?: boolean | SecurityQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SecurityQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SecurityQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SecurityQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityQuestion"
    objects: {
      answers: Prisma.$UserSecurityAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["securityQuestion"]>
    composites: {}
  }

  type SecurityQuestionGetPayload<S extends boolean | null | undefined | SecurityQuestionDefaultArgs> = $Result.GetResult<Prisma.$SecurityQuestionPayload, S>

  type SecurityQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityQuestionCountAggregateInputType | true
    }

  export interface SecurityQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityQuestion'], meta: { name: 'SecurityQuestion' } }
    /**
     * Find zero or one SecurityQuestion that matches the filter.
     * @param {SecurityQuestionFindUniqueArgs} args - Arguments to find a SecurityQuestion
     * @example
     * // Get one SecurityQuestion
     * const securityQuestion = await prisma.securityQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityQuestionFindUniqueArgs>(args: SelectSubset<T, SecurityQuestionFindUniqueArgs<ExtArgs>>): Prisma__SecurityQuestionClient<$Result.GetResult<Prisma.$SecurityQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityQuestionFindUniqueOrThrowArgs} args - Arguments to find a SecurityQuestion
     * @example
     * // Get one SecurityQuestion
     * const securityQuestion = await prisma.securityQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityQuestionClient<$Result.GetResult<Prisma.$SecurityQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityQuestionFindFirstArgs} args - Arguments to find a SecurityQuestion
     * @example
     * // Get one SecurityQuestion
     * const securityQuestion = await prisma.securityQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityQuestionFindFirstArgs>(args?: SelectSubset<T, SecurityQuestionFindFirstArgs<ExtArgs>>): Prisma__SecurityQuestionClient<$Result.GetResult<Prisma.$SecurityQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityQuestionFindFirstOrThrowArgs} args - Arguments to find a SecurityQuestion
     * @example
     * // Get one SecurityQuestion
     * const securityQuestion = await prisma.securityQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityQuestionClient<$Result.GetResult<Prisma.$SecurityQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityQuestions
     * const securityQuestions = await prisma.securityQuestion.findMany()
     * 
     * // Get first 10 SecurityQuestions
     * const securityQuestions = await prisma.securityQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityQuestionWithIdOnly = await prisma.securityQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityQuestionFindManyArgs>(args?: SelectSubset<T, SecurityQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityQuestion.
     * @param {SecurityQuestionCreateArgs} args - Arguments to create a SecurityQuestion.
     * @example
     * // Create one SecurityQuestion
     * const SecurityQuestion = await prisma.securityQuestion.create({
     *   data: {
     *     // ... data to create a SecurityQuestion
     *   }
     * })
     * 
     */
    create<T extends SecurityQuestionCreateArgs>(args: SelectSubset<T, SecurityQuestionCreateArgs<ExtArgs>>): Prisma__SecurityQuestionClient<$Result.GetResult<Prisma.$SecurityQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityQuestions.
     * @param {SecurityQuestionCreateManyArgs} args - Arguments to create many SecurityQuestions.
     * @example
     * // Create many SecurityQuestions
     * const securityQuestion = await prisma.securityQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityQuestionCreateManyArgs>(args?: SelectSubset<T, SecurityQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityQuestions and returns the data saved in the database.
     * @param {SecurityQuestionCreateManyAndReturnArgs} args - Arguments to create many SecurityQuestions.
     * @example
     * // Create many SecurityQuestions
     * const securityQuestion = await prisma.securityQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityQuestions and only return the `id`
     * const securityQuestionWithIdOnly = await prisma.securityQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecurityQuestion.
     * @param {SecurityQuestionDeleteArgs} args - Arguments to delete one SecurityQuestion.
     * @example
     * // Delete one SecurityQuestion
     * const SecurityQuestion = await prisma.securityQuestion.delete({
     *   where: {
     *     // ... filter to delete one SecurityQuestion
     *   }
     * })
     * 
     */
    delete<T extends SecurityQuestionDeleteArgs>(args: SelectSubset<T, SecurityQuestionDeleteArgs<ExtArgs>>): Prisma__SecurityQuestionClient<$Result.GetResult<Prisma.$SecurityQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityQuestion.
     * @param {SecurityQuestionUpdateArgs} args - Arguments to update one SecurityQuestion.
     * @example
     * // Update one SecurityQuestion
     * const securityQuestion = await prisma.securityQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityQuestionUpdateArgs>(args: SelectSubset<T, SecurityQuestionUpdateArgs<ExtArgs>>): Prisma__SecurityQuestionClient<$Result.GetResult<Prisma.$SecurityQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityQuestions.
     * @param {SecurityQuestionDeleteManyArgs} args - Arguments to filter SecurityQuestions to delete.
     * @example
     * // Delete a few SecurityQuestions
     * const { count } = await prisma.securityQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityQuestionDeleteManyArgs>(args?: SelectSubset<T, SecurityQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityQuestions
     * const securityQuestion = await prisma.securityQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityQuestionUpdateManyArgs>(args: SelectSubset<T, SecurityQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityQuestions and returns the data updated in the database.
     * @param {SecurityQuestionUpdateManyAndReturnArgs} args - Arguments to update many SecurityQuestions.
     * @example
     * // Update many SecurityQuestions
     * const securityQuestion = await prisma.securityQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecurityQuestions and only return the `id`
     * const securityQuestionWithIdOnly = await prisma.securityQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecurityQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, SecurityQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecurityQuestion.
     * @param {SecurityQuestionUpsertArgs} args - Arguments to update or create a SecurityQuestion.
     * @example
     * // Update or create a SecurityQuestion
     * const securityQuestion = await prisma.securityQuestion.upsert({
     *   create: {
     *     // ... data to create a SecurityQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityQuestion we want to update
     *   }
     * })
     */
    upsert<T extends SecurityQuestionUpsertArgs>(args: SelectSubset<T, SecurityQuestionUpsertArgs<ExtArgs>>): Prisma__SecurityQuestionClient<$Result.GetResult<Prisma.$SecurityQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityQuestionCountArgs} args - Arguments to filter SecurityQuestions to count.
     * @example
     * // Count the number of SecurityQuestions
     * const count = await prisma.securityQuestion.count({
     *   where: {
     *     // ... the filter for the SecurityQuestions we want to count
     *   }
     * })
    **/
    count<T extends SecurityQuestionCountArgs>(
      args?: Subset<T, SecurityQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecurityQuestionAggregateArgs>(args: Subset<T, SecurityQuestionAggregateArgs>): Prisma.PrismaPromise<GetSecurityQuestionAggregateType<T>>

    /**
     * Group by SecurityQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityQuestionGroupByArgs} args - Group by arguments.
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
      T extends SecurityQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityQuestionGroupByArgs['orderBy'] }
        : { orderBy?: SecurityQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SecurityQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityQuestion model
   */
  readonly fields: SecurityQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends SecurityQuestion$answersArgs<ExtArgs> = {}>(args?: Subset<T, SecurityQuestion$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSecurityAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecurityQuestion model
   */
  interface SecurityQuestionFieldRefs {
    readonly id: FieldRef<"SecurityQuestion", 'String'>
    readonly question: FieldRef<"SecurityQuestion", 'String'>
    readonly createdAt: FieldRef<"SecurityQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"SecurityQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecurityQuestion findUnique
   */
  export type SecurityQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityQuestion
     */
    select?: SecurityQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityQuestion
     */
    omit?: SecurityQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityQuestionInclude<ExtArgs> | null
    /**
     * Filter, which SecurityQuestion to fetch.
     */
    where: SecurityQuestionWhereUniqueInput
  }

  /**
   * SecurityQuestion findUniqueOrThrow
   */
  export type SecurityQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityQuestion
     */
    select?: SecurityQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityQuestion
     */
    omit?: SecurityQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityQuestionInclude<ExtArgs> | null
    /**
     * Filter, which SecurityQuestion to fetch.
     */
    where: SecurityQuestionWhereUniqueInput
  }

  /**
   * SecurityQuestion findFirst
   */
  export type SecurityQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityQuestion
     */
    select?: SecurityQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityQuestion
     */
    omit?: SecurityQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityQuestionInclude<ExtArgs> | null
    /**
     * Filter, which SecurityQuestion to fetch.
     */
    where?: SecurityQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityQuestions to fetch.
     */
    orderBy?: SecurityQuestionOrderByWithRelationInput | SecurityQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityQuestions.
     */
    cursor?: SecurityQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityQuestions.
     */
    distinct?: SecurityQuestionScalarFieldEnum | SecurityQuestionScalarFieldEnum[]
  }

  /**
   * SecurityQuestion findFirstOrThrow
   */
  export type SecurityQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityQuestion
     */
    select?: SecurityQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityQuestion
     */
    omit?: SecurityQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityQuestionInclude<ExtArgs> | null
    /**
     * Filter, which SecurityQuestion to fetch.
     */
    where?: SecurityQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityQuestions to fetch.
     */
    orderBy?: SecurityQuestionOrderByWithRelationInput | SecurityQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityQuestions.
     */
    cursor?: SecurityQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityQuestions.
     */
    distinct?: SecurityQuestionScalarFieldEnum | SecurityQuestionScalarFieldEnum[]
  }

  /**
   * SecurityQuestion findMany
   */
  export type SecurityQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityQuestion
     */
    select?: SecurityQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityQuestion
     */
    omit?: SecurityQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityQuestionInclude<ExtArgs> | null
    /**
     * Filter, which SecurityQuestions to fetch.
     */
    where?: SecurityQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityQuestions to fetch.
     */
    orderBy?: SecurityQuestionOrderByWithRelationInput | SecurityQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityQuestions.
     */
    cursor?: SecurityQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityQuestions.
     */
    skip?: number
    distinct?: SecurityQuestionScalarFieldEnum | SecurityQuestionScalarFieldEnum[]
  }

  /**
   * SecurityQuestion create
   */
  export type SecurityQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityQuestion
     */
    select?: SecurityQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityQuestion
     */
    omit?: SecurityQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a SecurityQuestion.
     */
    data: XOR<SecurityQuestionCreateInput, SecurityQuestionUncheckedCreateInput>
  }

  /**
   * SecurityQuestion createMany
   */
  export type SecurityQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityQuestions.
     */
    data: SecurityQuestionCreateManyInput | SecurityQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityQuestion createManyAndReturn
   */
  export type SecurityQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityQuestion
     */
    select?: SecurityQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityQuestion
     */
    omit?: SecurityQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many SecurityQuestions.
     */
    data: SecurityQuestionCreateManyInput | SecurityQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityQuestion update
   */
  export type SecurityQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityQuestion
     */
    select?: SecurityQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityQuestion
     */
    omit?: SecurityQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a SecurityQuestion.
     */
    data: XOR<SecurityQuestionUpdateInput, SecurityQuestionUncheckedUpdateInput>
    /**
     * Choose, which SecurityQuestion to update.
     */
    where: SecurityQuestionWhereUniqueInput
  }

  /**
   * SecurityQuestion updateMany
   */
  export type SecurityQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityQuestions.
     */
    data: XOR<SecurityQuestionUpdateManyMutationInput, SecurityQuestionUncheckedUpdateManyInput>
    /**
     * Filter which SecurityQuestions to update
     */
    where?: SecurityQuestionWhereInput
    /**
     * Limit how many SecurityQuestions to update.
     */
    limit?: number
  }

  /**
   * SecurityQuestion updateManyAndReturn
   */
  export type SecurityQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityQuestion
     */
    select?: SecurityQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityQuestion
     */
    omit?: SecurityQuestionOmit<ExtArgs> | null
    /**
     * The data used to update SecurityQuestions.
     */
    data: XOR<SecurityQuestionUpdateManyMutationInput, SecurityQuestionUncheckedUpdateManyInput>
    /**
     * Filter which SecurityQuestions to update
     */
    where?: SecurityQuestionWhereInput
    /**
     * Limit how many SecurityQuestions to update.
     */
    limit?: number
  }

  /**
   * SecurityQuestion upsert
   */
  export type SecurityQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityQuestion
     */
    select?: SecurityQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityQuestion
     */
    omit?: SecurityQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the SecurityQuestion to update in case it exists.
     */
    where: SecurityQuestionWhereUniqueInput
    /**
     * In case the SecurityQuestion found by the `where` argument doesn't exist, create a new SecurityQuestion with this data.
     */
    create: XOR<SecurityQuestionCreateInput, SecurityQuestionUncheckedCreateInput>
    /**
     * In case the SecurityQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityQuestionUpdateInput, SecurityQuestionUncheckedUpdateInput>
  }

  /**
   * SecurityQuestion delete
   */
  export type SecurityQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityQuestion
     */
    select?: SecurityQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityQuestion
     */
    omit?: SecurityQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityQuestionInclude<ExtArgs> | null
    /**
     * Filter which SecurityQuestion to delete.
     */
    where: SecurityQuestionWhereUniqueInput
  }

  /**
   * SecurityQuestion deleteMany
   */
  export type SecurityQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityQuestions to delete
     */
    where?: SecurityQuestionWhereInput
    /**
     * Limit how many SecurityQuestions to delete.
     */
    limit?: number
  }

  /**
   * SecurityQuestion.answers
   */
  export type SecurityQuestion$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerInclude<ExtArgs> | null
    where?: UserSecurityAnswerWhereInput
    orderBy?: UserSecurityAnswerOrderByWithRelationInput | UserSecurityAnswerOrderByWithRelationInput[]
    cursor?: UserSecurityAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSecurityAnswerScalarFieldEnum | UserSecurityAnswerScalarFieldEnum[]
  }

  /**
   * SecurityQuestion without action
   */
  export type SecurityQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityQuestion
     */
    select?: SecurityQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityQuestion
     */
    omit?: SecurityQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityQuestionInclude<ExtArgs> | null
  }


  /**
   * Model UserSecurityAnswer
   */

  export type AggregateUserSecurityAnswer = {
    _count: UserSecurityAnswerCountAggregateOutputType | null
    _min: UserSecurityAnswerMinAggregateOutputType | null
    _max: UserSecurityAnswerMaxAggregateOutputType | null
  }

  export type UserSecurityAnswerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    answerHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSecurityAnswerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    answerHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSecurityAnswerCountAggregateOutputType = {
    id: number
    userId: number
    questionId: number
    answerHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSecurityAnswerMinAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    answerHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSecurityAnswerMaxAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    answerHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSecurityAnswerCountAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    answerHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSecurityAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSecurityAnswer to aggregate.
     */
    where?: UserSecurityAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSecurityAnswers to fetch.
     */
    orderBy?: UserSecurityAnswerOrderByWithRelationInput | UserSecurityAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSecurityAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSecurityAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSecurityAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSecurityAnswers
    **/
    _count?: true | UserSecurityAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSecurityAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSecurityAnswerMaxAggregateInputType
  }

  export type GetUserSecurityAnswerAggregateType<T extends UserSecurityAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSecurityAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSecurityAnswer[P]>
      : GetScalarType<T[P], AggregateUserSecurityAnswer[P]>
  }




  export type UserSecurityAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSecurityAnswerWhereInput
    orderBy?: UserSecurityAnswerOrderByWithAggregationInput | UserSecurityAnswerOrderByWithAggregationInput[]
    by: UserSecurityAnswerScalarFieldEnum[] | UserSecurityAnswerScalarFieldEnum
    having?: UserSecurityAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSecurityAnswerCountAggregateInputType | true
    _min?: UserSecurityAnswerMinAggregateInputType
    _max?: UserSecurityAnswerMaxAggregateInputType
  }

  export type UserSecurityAnswerGroupByOutputType = {
    id: string
    userId: string
    questionId: string
    answerHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserSecurityAnswerCountAggregateOutputType | null
    _min: UserSecurityAnswerMinAggregateOutputType | null
    _max: UserSecurityAnswerMaxAggregateOutputType | null
  }

  type GetUserSecurityAnswerGroupByPayload<T extends UserSecurityAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSecurityAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSecurityAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSecurityAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], UserSecurityAnswerGroupByOutputType[P]>
        }
      >
    >


  export type UserSecurityAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answerHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | SecurityQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSecurityAnswer"]>

  export type UserSecurityAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answerHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | SecurityQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSecurityAnswer"]>

  export type UserSecurityAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answerHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | SecurityQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSecurityAnswer"]>

  export type UserSecurityAnswerSelectScalar = {
    id?: boolean
    userId?: boolean
    questionId?: boolean
    answerHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSecurityAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questionId" | "answerHash" | "createdAt" | "updatedAt", ExtArgs["result"]["userSecurityAnswer"]>
  export type UserSecurityAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | SecurityQuestionDefaultArgs<ExtArgs>
  }
  export type UserSecurityAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | SecurityQuestionDefaultArgs<ExtArgs>
  }
  export type UserSecurityAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | SecurityQuestionDefaultArgs<ExtArgs>
  }

  export type $UserSecurityAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSecurityAnswer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$SecurityQuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      questionId: string
      answerHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSecurityAnswer"]>
    composites: {}
  }

  type UserSecurityAnswerGetPayload<S extends boolean | null | undefined | UserSecurityAnswerDefaultArgs> = $Result.GetResult<Prisma.$UserSecurityAnswerPayload, S>

  type UserSecurityAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSecurityAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSecurityAnswerCountAggregateInputType | true
    }

  export interface UserSecurityAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSecurityAnswer'], meta: { name: 'UserSecurityAnswer' } }
    /**
     * Find zero or one UserSecurityAnswer that matches the filter.
     * @param {UserSecurityAnswerFindUniqueArgs} args - Arguments to find a UserSecurityAnswer
     * @example
     * // Get one UserSecurityAnswer
     * const userSecurityAnswer = await prisma.userSecurityAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSecurityAnswerFindUniqueArgs>(args: SelectSubset<T, UserSecurityAnswerFindUniqueArgs<ExtArgs>>): Prisma__UserSecurityAnswerClient<$Result.GetResult<Prisma.$UserSecurityAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSecurityAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSecurityAnswerFindUniqueOrThrowArgs} args - Arguments to find a UserSecurityAnswer
     * @example
     * // Get one UserSecurityAnswer
     * const userSecurityAnswer = await prisma.userSecurityAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSecurityAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSecurityAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSecurityAnswerClient<$Result.GetResult<Prisma.$UserSecurityAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSecurityAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityAnswerFindFirstArgs} args - Arguments to find a UserSecurityAnswer
     * @example
     * // Get one UserSecurityAnswer
     * const userSecurityAnswer = await prisma.userSecurityAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSecurityAnswerFindFirstArgs>(args?: SelectSubset<T, UserSecurityAnswerFindFirstArgs<ExtArgs>>): Prisma__UserSecurityAnswerClient<$Result.GetResult<Prisma.$UserSecurityAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSecurityAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityAnswerFindFirstOrThrowArgs} args - Arguments to find a UserSecurityAnswer
     * @example
     * // Get one UserSecurityAnswer
     * const userSecurityAnswer = await prisma.userSecurityAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSecurityAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSecurityAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSecurityAnswerClient<$Result.GetResult<Prisma.$UserSecurityAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSecurityAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSecurityAnswers
     * const userSecurityAnswers = await prisma.userSecurityAnswer.findMany()
     * 
     * // Get first 10 UserSecurityAnswers
     * const userSecurityAnswers = await prisma.userSecurityAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSecurityAnswerWithIdOnly = await prisma.userSecurityAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSecurityAnswerFindManyArgs>(args?: SelectSubset<T, UserSecurityAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSecurityAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSecurityAnswer.
     * @param {UserSecurityAnswerCreateArgs} args - Arguments to create a UserSecurityAnswer.
     * @example
     * // Create one UserSecurityAnswer
     * const UserSecurityAnswer = await prisma.userSecurityAnswer.create({
     *   data: {
     *     // ... data to create a UserSecurityAnswer
     *   }
     * })
     * 
     */
    create<T extends UserSecurityAnswerCreateArgs>(args: SelectSubset<T, UserSecurityAnswerCreateArgs<ExtArgs>>): Prisma__UserSecurityAnswerClient<$Result.GetResult<Prisma.$UserSecurityAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSecurityAnswers.
     * @param {UserSecurityAnswerCreateManyArgs} args - Arguments to create many UserSecurityAnswers.
     * @example
     * // Create many UserSecurityAnswers
     * const userSecurityAnswer = await prisma.userSecurityAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSecurityAnswerCreateManyArgs>(args?: SelectSubset<T, UserSecurityAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSecurityAnswers and returns the data saved in the database.
     * @param {UserSecurityAnswerCreateManyAndReturnArgs} args - Arguments to create many UserSecurityAnswers.
     * @example
     * // Create many UserSecurityAnswers
     * const userSecurityAnswer = await prisma.userSecurityAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSecurityAnswers and only return the `id`
     * const userSecurityAnswerWithIdOnly = await prisma.userSecurityAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSecurityAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSecurityAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSecurityAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSecurityAnswer.
     * @param {UserSecurityAnswerDeleteArgs} args - Arguments to delete one UserSecurityAnswer.
     * @example
     * // Delete one UserSecurityAnswer
     * const UserSecurityAnswer = await prisma.userSecurityAnswer.delete({
     *   where: {
     *     // ... filter to delete one UserSecurityAnswer
     *   }
     * })
     * 
     */
    delete<T extends UserSecurityAnswerDeleteArgs>(args: SelectSubset<T, UserSecurityAnswerDeleteArgs<ExtArgs>>): Prisma__UserSecurityAnswerClient<$Result.GetResult<Prisma.$UserSecurityAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSecurityAnswer.
     * @param {UserSecurityAnswerUpdateArgs} args - Arguments to update one UserSecurityAnswer.
     * @example
     * // Update one UserSecurityAnswer
     * const userSecurityAnswer = await prisma.userSecurityAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSecurityAnswerUpdateArgs>(args: SelectSubset<T, UserSecurityAnswerUpdateArgs<ExtArgs>>): Prisma__UserSecurityAnswerClient<$Result.GetResult<Prisma.$UserSecurityAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSecurityAnswers.
     * @param {UserSecurityAnswerDeleteManyArgs} args - Arguments to filter UserSecurityAnswers to delete.
     * @example
     * // Delete a few UserSecurityAnswers
     * const { count } = await prisma.userSecurityAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSecurityAnswerDeleteManyArgs>(args?: SelectSubset<T, UserSecurityAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSecurityAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSecurityAnswers
     * const userSecurityAnswer = await prisma.userSecurityAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSecurityAnswerUpdateManyArgs>(args: SelectSubset<T, UserSecurityAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSecurityAnswers and returns the data updated in the database.
     * @param {UserSecurityAnswerUpdateManyAndReturnArgs} args - Arguments to update many UserSecurityAnswers.
     * @example
     * // Update many UserSecurityAnswers
     * const userSecurityAnswer = await prisma.userSecurityAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSecurityAnswers and only return the `id`
     * const userSecurityAnswerWithIdOnly = await prisma.userSecurityAnswer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSecurityAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSecurityAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSecurityAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSecurityAnswer.
     * @param {UserSecurityAnswerUpsertArgs} args - Arguments to update or create a UserSecurityAnswer.
     * @example
     * // Update or create a UserSecurityAnswer
     * const userSecurityAnswer = await prisma.userSecurityAnswer.upsert({
     *   create: {
     *     // ... data to create a UserSecurityAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSecurityAnswer we want to update
     *   }
     * })
     */
    upsert<T extends UserSecurityAnswerUpsertArgs>(args: SelectSubset<T, UserSecurityAnswerUpsertArgs<ExtArgs>>): Prisma__UserSecurityAnswerClient<$Result.GetResult<Prisma.$UserSecurityAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSecurityAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityAnswerCountArgs} args - Arguments to filter UserSecurityAnswers to count.
     * @example
     * // Count the number of UserSecurityAnswers
     * const count = await prisma.userSecurityAnswer.count({
     *   where: {
     *     // ... the filter for the UserSecurityAnswers we want to count
     *   }
     * })
    **/
    count<T extends UserSecurityAnswerCountArgs>(
      args?: Subset<T, UserSecurityAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSecurityAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSecurityAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSecurityAnswerAggregateArgs>(args: Subset<T, UserSecurityAnswerAggregateArgs>): Prisma.PrismaPromise<GetUserSecurityAnswerAggregateType<T>>

    /**
     * Group by UserSecurityAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSecurityAnswerGroupByArgs} args - Group by arguments.
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
      T extends UserSecurityAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSecurityAnswerGroupByArgs['orderBy'] }
        : { orderBy?: UserSecurityAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserSecurityAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSecurityAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSecurityAnswer model
   */
  readonly fields: UserSecurityAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSecurityAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSecurityAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends SecurityQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SecurityQuestionDefaultArgs<ExtArgs>>): Prisma__SecurityQuestionClient<$Result.GetResult<Prisma.$SecurityQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSecurityAnswer model
   */
  interface UserSecurityAnswerFieldRefs {
    readonly id: FieldRef<"UserSecurityAnswer", 'String'>
    readonly userId: FieldRef<"UserSecurityAnswer", 'String'>
    readonly questionId: FieldRef<"UserSecurityAnswer", 'String'>
    readonly answerHash: FieldRef<"UserSecurityAnswer", 'String'>
    readonly createdAt: FieldRef<"UserSecurityAnswer", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSecurityAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSecurityAnswer findUnique
   */
  export type UserSecurityAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserSecurityAnswer to fetch.
     */
    where: UserSecurityAnswerWhereUniqueInput
  }

  /**
   * UserSecurityAnswer findUniqueOrThrow
   */
  export type UserSecurityAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserSecurityAnswer to fetch.
     */
    where: UserSecurityAnswerWhereUniqueInput
  }

  /**
   * UserSecurityAnswer findFirst
   */
  export type UserSecurityAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserSecurityAnswer to fetch.
     */
    where?: UserSecurityAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSecurityAnswers to fetch.
     */
    orderBy?: UserSecurityAnswerOrderByWithRelationInput | UserSecurityAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSecurityAnswers.
     */
    cursor?: UserSecurityAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSecurityAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSecurityAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSecurityAnswers.
     */
    distinct?: UserSecurityAnswerScalarFieldEnum | UserSecurityAnswerScalarFieldEnum[]
  }

  /**
   * UserSecurityAnswer findFirstOrThrow
   */
  export type UserSecurityAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserSecurityAnswer to fetch.
     */
    where?: UserSecurityAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSecurityAnswers to fetch.
     */
    orderBy?: UserSecurityAnswerOrderByWithRelationInput | UserSecurityAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSecurityAnswers.
     */
    cursor?: UserSecurityAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSecurityAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSecurityAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSecurityAnswers.
     */
    distinct?: UserSecurityAnswerScalarFieldEnum | UserSecurityAnswerScalarFieldEnum[]
  }

  /**
   * UserSecurityAnswer findMany
   */
  export type UserSecurityAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserSecurityAnswers to fetch.
     */
    where?: UserSecurityAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSecurityAnswers to fetch.
     */
    orderBy?: UserSecurityAnswerOrderByWithRelationInput | UserSecurityAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSecurityAnswers.
     */
    cursor?: UserSecurityAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSecurityAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSecurityAnswers.
     */
    skip?: number
    distinct?: UserSecurityAnswerScalarFieldEnum | UserSecurityAnswerScalarFieldEnum[]
  }

  /**
   * UserSecurityAnswer create
   */
  export type UserSecurityAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSecurityAnswer.
     */
    data: XOR<UserSecurityAnswerCreateInput, UserSecurityAnswerUncheckedCreateInput>
  }

  /**
   * UserSecurityAnswer createMany
   */
  export type UserSecurityAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSecurityAnswers.
     */
    data: UserSecurityAnswerCreateManyInput | UserSecurityAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSecurityAnswer createManyAndReturn
   */
  export type UserSecurityAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many UserSecurityAnswers.
     */
    data: UserSecurityAnswerCreateManyInput | UserSecurityAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSecurityAnswer update
   */
  export type UserSecurityAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSecurityAnswer.
     */
    data: XOR<UserSecurityAnswerUpdateInput, UserSecurityAnswerUncheckedUpdateInput>
    /**
     * Choose, which UserSecurityAnswer to update.
     */
    where: UserSecurityAnswerWhereUniqueInput
  }

  /**
   * UserSecurityAnswer updateMany
   */
  export type UserSecurityAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSecurityAnswers.
     */
    data: XOR<UserSecurityAnswerUpdateManyMutationInput, UserSecurityAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserSecurityAnswers to update
     */
    where?: UserSecurityAnswerWhereInput
    /**
     * Limit how many UserSecurityAnswers to update.
     */
    limit?: number
  }

  /**
   * UserSecurityAnswer updateManyAndReturn
   */
  export type UserSecurityAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * The data used to update UserSecurityAnswers.
     */
    data: XOR<UserSecurityAnswerUpdateManyMutationInput, UserSecurityAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserSecurityAnswers to update
     */
    where?: UserSecurityAnswerWhereInput
    /**
     * Limit how many UserSecurityAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSecurityAnswer upsert
   */
  export type UserSecurityAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSecurityAnswer to update in case it exists.
     */
    where: UserSecurityAnswerWhereUniqueInput
    /**
     * In case the UserSecurityAnswer found by the `where` argument doesn't exist, create a new UserSecurityAnswer with this data.
     */
    create: XOR<UserSecurityAnswerCreateInput, UserSecurityAnswerUncheckedCreateInput>
    /**
     * In case the UserSecurityAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSecurityAnswerUpdateInput, UserSecurityAnswerUncheckedUpdateInput>
  }

  /**
   * UserSecurityAnswer delete
   */
  export type UserSecurityAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerInclude<ExtArgs> | null
    /**
     * Filter which UserSecurityAnswer to delete.
     */
    where: UserSecurityAnswerWhereUniqueInput
  }

  /**
   * UserSecurityAnswer deleteMany
   */
  export type UserSecurityAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSecurityAnswers to delete
     */
    where?: UserSecurityAnswerWhereInput
    /**
     * Limit how many UserSecurityAnswers to delete.
     */
    limit?: number
  }

  /**
   * UserSecurityAnswer without action
   */
  export type UserSecurityAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSecurityAnswer
     */
    select?: UserSecurityAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSecurityAnswer
     */
    omit?: UserSecurityAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSecurityAnswerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    passcode: 'passcode',
    alternativeEmail: 'alternativeEmail',
    alternativePhoneNumber: 'alternativePhoneNumber',
    accountNumber: 'accountNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    deviceId: 'deviceId',
    userId: 'userId'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const SecurityQuestionScalarFieldEnum: {
    id: 'id',
    question: 'question',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SecurityQuestionScalarFieldEnum = (typeof SecurityQuestionScalarFieldEnum)[keyof typeof SecurityQuestionScalarFieldEnum]


  export const UserSecurityAnswerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questionId: 'questionId',
    answerHash: 'answerHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSecurityAnswerScalarFieldEnum = (typeof UserSecurityAnswerScalarFieldEnum)[keyof typeof UserSecurityAnswerScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    passcode?: StringFilter<"User"> | string
    alternativeEmail?: StringNullableFilter<"User"> | string | null
    alternativePhoneNumber?: StringFilter<"User"> | string
    accountNumber?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Devices?: DeviceListRelationFilter
    SecurityAnswers?: UserSecurityAnswerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    passcode?: SortOrder
    alternativeEmail?: SortOrderInput | SortOrder
    alternativePhoneNumber?: SortOrder
    accountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Devices?: DeviceOrderByRelationAggregateInput
    SecurityAnswers?: UserSecurityAnswerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    accountNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    passcode?: StringFilter<"User"> | string
    alternativeEmail?: StringNullableFilter<"User"> | string | null
    alternativePhoneNumber?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Devices?: DeviceListRelationFilter
    SecurityAnswers?: UserSecurityAnswerListRelationFilter
  }, "id" | "email" | "accountNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    passcode?: SortOrder
    alternativeEmail?: SortOrderInput | SortOrder
    alternativePhoneNumber?: SortOrder
    accountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    passcode?: StringWithAggregatesFilter<"User"> | string
    alternativeEmail?: StringNullableWithAggregatesFilter<"User"> | string | null
    alternativePhoneNumber?: StringWithAggregatesFilter<"User"> | string
    accountNumber?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    deviceId?: StringFilter<"Device"> | string
    userId?: StringFilter<"Device"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deviceId?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    userId?: StringFilter<"Device"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "deviceId">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    deviceId?: StringWithAggregatesFilter<"Device"> | string
    userId?: StringWithAggregatesFilter<"Device"> | string
  }

  export type SecurityQuestionWhereInput = {
    AND?: SecurityQuestionWhereInput | SecurityQuestionWhereInput[]
    OR?: SecurityQuestionWhereInput[]
    NOT?: SecurityQuestionWhereInput | SecurityQuestionWhereInput[]
    id?: StringFilter<"SecurityQuestion"> | string
    question?: StringFilter<"SecurityQuestion"> | string
    createdAt?: DateTimeFilter<"SecurityQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"SecurityQuestion"> | Date | string
    answers?: UserSecurityAnswerListRelationFilter
  }

  export type SecurityQuestionOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    answers?: UserSecurityAnswerOrderByRelationAggregateInput
  }

  export type SecurityQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    question?: string
    AND?: SecurityQuestionWhereInput | SecurityQuestionWhereInput[]
    OR?: SecurityQuestionWhereInput[]
    NOT?: SecurityQuestionWhereInput | SecurityQuestionWhereInput[]
    createdAt?: DateTimeFilter<"SecurityQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"SecurityQuestion"> | Date | string
    answers?: UserSecurityAnswerListRelationFilter
  }, "id" | "question">

  export type SecurityQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SecurityQuestionCountOrderByAggregateInput
    _max?: SecurityQuestionMaxOrderByAggregateInput
    _min?: SecurityQuestionMinOrderByAggregateInput
  }

  export type SecurityQuestionScalarWhereWithAggregatesInput = {
    AND?: SecurityQuestionScalarWhereWithAggregatesInput | SecurityQuestionScalarWhereWithAggregatesInput[]
    OR?: SecurityQuestionScalarWhereWithAggregatesInput[]
    NOT?: SecurityQuestionScalarWhereWithAggregatesInput | SecurityQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecurityQuestion"> | string
    question?: StringWithAggregatesFilter<"SecurityQuestion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SecurityQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SecurityQuestion"> | Date | string
  }

  export type UserSecurityAnswerWhereInput = {
    AND?: UserSecurityAnswerWhereInput | UserSecurityAnswerWhereInput[]
    OR?: UserSecurityAnswerWhereInput[]
    NOT?: UserSecurityAnswerWhereInput | UserSecurityAnswerWhereInput[]
    id?: StringFilter<"UserSecurityAnswer"> | string
    userId?: StringFilter<"UserSecurityAnswer"> | string
    questionId?: StringFilter<"UserSecurityAnswer"> | string
    answerHash?: StringFilter<"UserSecurityAnswer"> | string
    createdAt?: DateTimeFilter<"UserSecurityAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"UserSecurityAnswer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<SecurityQuestionScalarRelationFilter, SecurityQuestionWhereInput>
  }

  export type UserSecurityAnswerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answerHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: SecurityQuestionOrderByWithRelationInput
  }

  export type UserSecurityAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_questionId?: UserSecurityAnswerUserIdQuestionIdCompoundUniqueInput
    AND?: UserSecurityAnswerWhereInput | UserSecurityAnswerWhereInput[]
    OR?: UserSecurityAnswerWhereInput[]
    NOT?: UserSecurityAnswerWhereInput | UserSecurityAnswerWhereInput[]
    userId?: StringFilter<"UserSecurityAnswer"> | string
    questionId?: StringFilter<"UserSecurityAnswer"> | string
    answerHash?: StringFilter<"UserSecurityAnswer"> | string
    createdAt?: DateTimeFilter<"UserSecurityAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"UserSecurityAnswer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<SecurityQuestionScalarRelationFilter, SecurityQuestionWhereInput>
  }, "id" | "userId_questionId">

  export type UserSecurityAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answerHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSecurityAnswerCountOrderByAggregateInput
    _max?: UserSecurityAnswerMaxOrderByAggregateInput
    _min?: UserSecurityAnswerMinOrderByAggregateInput
  }

  export type UserSecurityAnswerScalarWhereWithAggregatesInput = {
    AND?: UserSecurityAnswerScalarWhereWithAggregatesInput | UserSecurityAnswerScalarWhereWithAggregatesInput[]
    OR?: UserSecurityAnswerScalarWhereWithAggregatesInput[]
    NOT?: UserSecurityAnswerScalarWhereWithAggregatesInput | UserSecurityAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSecurityAnswer"> | string
    userId?: StringWithAggregatesFilter<"UserSecurityAnswer"> | string
    questionId?: StringWithAggregatesFilter<"UserSecurityAnswer"> | string
    answerHash?: StringWithAggregatesFilter<"UserSecurityAnswer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserSecurityAnswer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSecurityAnswer"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    passcode: string
    alternativeEmail?: string | null
    alternativePhoneNumber: string
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Devices?: DeviceCreateNestedManyWithoutUserInput
    SecurityAnswers?: UserSecurityAnswerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    passcode: string
    alternativeEmail?: string | null
    alternativePhoneNumber: string
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    SecurityAnswers?: UserSecurityAnswerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    alternativeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    alternativePhoneNumber?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Devices?: DeviceUpdateManyWithoutUserNestedInput
    SecurityAnswers?: UserSecurityAnswerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    alternativeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    alternativePhoneNumber?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    SecurityAnswers?: UserSecurityAnswerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    passcode: string
    alternativeEmail?: string | null
    alternativePhoneNumber: string
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    alternativeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    alternativePhoneNumber?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    alternativeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    alternativePhoneNumber?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    id?: string
    deviceId: string
    user: UserCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    deviceId: string
    userId: string
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceCreateManyInput = {
    id?: string
    deviceId: string
    userId: string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SecurityQuestionCreateInput = {
    id?: string
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: UserSecurityAnswerCreateNestedManyWithoutQuestionInput
  }

  export type SecurityQuestionUncheckedCreateInput = {
    id?: string
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
    answers?: UserSecurityAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type SecurityQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: UserSecurityAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type SecurityQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: UserSecurityAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type SecurityQuestionCreateManyInput = {
    id?: string
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecurityQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSecurityAnswerCreateInput = {
    id?: string
    answerHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSecurityAnswersInput
    question: SecurityQuestionCreateNestedOneWithoutAnswersInput
  }

  export type UserSecurityAnswerUncheckedCreateInput = {
    id?: string
    userId: string
    questionId: string
    answerHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSecurityAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSecurityAnswersNestedInput
    question?: SecurityQuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type UserSecurityAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSecurityAnswerCreateManyInput = {
    id?: string
    userId: string
    questionId: string
    answerHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSecurityAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSecurityAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type UserSecurityAnswerListRelationFilter = {
    every?: UserSecurityAnswerWhereInput
    some?: UserSecurityAnswerWhereInput
    none?: UserSecurityAnswerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSecurityAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    passcode?: SortOrder
    alternativeEmail?: SortOrder
    alternativePhoneNumber?: SortOrder
    accountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    passcode?: SortOrder
    alternativeEmail?: SortOrder
    alternativePhoneNumber?: SortOrder
    accountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    passcode?: SortOrder
    alternativeEmail?: SortOrder
    alternativePhoneNumber?: SortOrder
    accountNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    deviceId?: SortOrder
    userId?: SortOrder
  }

  export type SecurityQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecurityQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecurityQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecurityQuestionScalarRelationFilter = {
    is?: SecurityQuestionWhereInput
    isNot?: SecurityQuestionWhereInput
  }

  export type UserSecurityAnswerUserIdQuestionIdCompoundUniqueInput = {
    userId: string
    questionId: string
  }

  export type UserSecurityAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answerHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSecurityAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answerHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSecurityAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    answerHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type UserSecurityAnswerCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSecurityAnswerCreateWithoutUserInput, UserSecurityAnswerUncheckedCreateWithoutUserInput> | UserSecurityAnswerCreateWithoutUserInput[] | UserSecurityAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSecurityAnswerCreateOrConnectWithoutUserInput | UserSecurityAnswerCreateOrConnectWithoutUserInput[]
    createMany?: UserSecurityAnswerCreateManyUserInputEnvelope
    connect?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type UserSecurityAnswerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSecurityAnswerCreateWithoutUserInput, UserSecurityAnswerUncheckedCreateWithoutUserInput> | UserSecurityAnswerCreateWithoutUserInput[] | UserSecurityAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSecurityAnswerCreateOrConnectWithoutUserInput | UserSecurityAnswerCreateOrConnectWithoutUserInput[]
    createMany?: UserSecurityAnswerCreateManyUserInputEnvelope
    connect?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type UserSecurityAnswerUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSecurityAnswerCreateWithoutUserInput, UserSecurityAnswerUncheckedCreateWithoutUserInput> | UserSecurityAnswerCreateWithoutUserInput[] | UserSecurityAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSecurityAnswerCreateOrConnectWithoutUserInput | UserSecurityAnswerCreateOrConnectWithoutUserInput[]
    upsert?: UserSecurityAnswerUpsertWithWhereUniqueWithoutUserInput | UserSecurityAnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSecurityAnswerCreateManyUserInputEnvelope
    set?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    disconnect?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    delete?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    connect?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    update?: UserSecurityAnswerUpdateWithWhereUniqueWithoutUserInput | UserSecurityAnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSecurityAnswerUpdateManyWithWhereWithoutUserInput | UserSecurityAnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSecurityAnswerScalarWhereInput | UserSecurityAnswerScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type UserSecurityAnswerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSecurityAnswerCreateWithoutUserInput, UserSecurityAnswerUncheckedCreateWithoutUserInput> | UserSecurityAnswerCreateWithoutUserInput[] | UserSecurityAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSecurityAnswerCreateOrConnectWithoutUserInput | UserSecurityAnswerCreateOrConnectWithoutUserInput[]
    upsert?: UserSecurityAnswerUpsertWithWhereUniqueWithoutUserInput | UserSecurityAnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSecurityAnswerCreateManyUserInputEnvelope
    set?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    disconnect?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    delete?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    connect?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    update?: UserSecurityAnswerUpdateWithWhereUniqueWithoutUserInput | UserSecurityAnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSecurityAnswerUpdateManyWithWhereWithoutUserInput | UserSecurityAnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSecurityAnswerScalarWhereInput | UserSecurityAnswerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserSecurityAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserSecurityAnswerCreateWithoutQuestionInput, UserSecurityAnswerUncheckedCreateWithoutQuestionInput> | UserSecurityAnswerCreateWithoutQuestionInput[] | UserSecurityAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserSecurityAnswerCreateOrConnectWithoutQuestionInput | UserSecurityAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: UserSecurityAnswerCreateManyQuestionInputEnvelope
    connect?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
  }

  export type UserSecurityAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserSecurityAnswerCreateWithoutQuestionInput, UserSecurityAnswerUncheckedCreateWithoutQuestionInput> | UserSecurityAnswerCreateWithoutQuestionInput[] | UserSecurityAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserSecurityAnswerCreateOrConnectWithoutQuestionInput | UserSecurityAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: UserSecurityAnswerCreateManyQuestionInputEnvelope
    connect?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
  }

  export type UserSecurityAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserSecurityAnswerCreateWithoutQuestionInput, UserSecurityAnswerUncheckedCreateWithoutQuestionInput> | UserSecurityAnswerCreateWithoutQuestionInput[] | UserSecurityAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserSecurityAnswerCreateOrConnectWithoutQuestionInput | UserSecurityAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: UserSecurityAnswerUpsertWithWhereUniqueWithoutQuestionInput | UserSecurityAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserSecurityAnswerCreateManyQuestionInputEnvelope
    set?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    disconnect?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    delete?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    connect?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    update?: UserSecurityAnswerUpdateWithWhereUniqueWithoutQuestionInput | UserSecurityAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserSecurityAnswerUpdateManyWithWhereWithoutQuestionInput | UserSecurityAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserSecurityAnswerScalarWhereInput | UserSecurityAnswerScalarWhereInput[]
  }

  export type UserSecurityAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserSecurityAnswerCreateWithoutQuestionInput, UserSecurityAnswerUncheckedCreateWithoutQuestionInput> | UserSecurityAnswerCreateWithoutQuestionInput[] | UserSecurityAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserSecurityAnswerCreateOrConnectWithoutQuestionInput | UserSecurityAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: UserSecurityAnswerUpsertWithWhereUniqueWithoutQuestionInput | UserSecurityAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserSecurityAnswerCreateManyQuestionInputEnvelope
    set?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    disconnect?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    delete?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    connect?: UserSecurityAnswerWhereUniqueInput | UserSecurityAnswerWhereUniqueInput[]
    update?: UserSecurityAnswerUpdateWithWhereUniqueWithoutQuestionInput | UserSecurityAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserSecurityAnswerUpdateManyWithWhereWithoutQuestionInput | UserSecurityAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserSecurityAnswerScalarWhereInput | UserSecurityAnswerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSecurityAnswersInput = {
    create?: XOR<UserCreateWithoutSecurityAnswersInput, UserUncheckedCreateWithoutSecurityAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type SecurityQuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<SecurityQuestionCreateWithoutAnswersInput, SecurityQuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: SecurityQuestionCreateOrConnectWithoutAnswersInput
    connect?: SecurityQuestionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSecurityAnswersNestedInput = {
    create?: XOR<UserCreateWithoutSecurityAnswersInput, UserUncheckedCreateWithoutSecurityAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecurityAnswersInput
    upsert?: UserUpsertWithoutSecurityAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSecurityAnswersInput, UserUpdateWithoutSecurityAnswersInput>, UserUncheckedUpdateWithoutSecurityAnswersInput>
  }

  export type SecurityQuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<SecurityQuestionCreateWithoutAnswersInput, SecurityQuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: SecurityQuestionCreateOrConnectWithoutAnswersInput
    upsert?: SecurityQuestionUpsertWithoutAnswersInput
    connect?: SecurityQuestionWhereUniqueInput
    update?: XOR<XOR<SecurityQuestionUpdateToOneWithWhereWithoutAnswersInput, SecurityQuestionUpdateWithoutAnswersInput>, SecurityQuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DeviceCreateWithoutUserInput = {
    id?: string
    deviceId: string
  }

  export type DeviceUncheckedCreateWithoutUserInput = {
    id?: string
    deviceId: string
  }

  export type DeviceCreateOrConnectWithoutUserInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceCreateManyUserInputEnvelope = {
    data: DeviceCreateManyUserInput | DeviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSecurityAnswerCreateWithoutUserInput = {
    id?: string
    answerHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: SecurityQuestionCreateNestedOneWithoutAnswersInput
  }

  export type UserSecurityAnswerUncheckedCreateWithoutUserInput = {
    id?: string
    questionId: string
    answerHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSecurityAnswerCreateOrConnectWithoutUserInput = {
    where: UserSecurityAnswerWhereUniqueInput
    create: XOR<UserSecurityAnswerCreateWithoutUserInput, UserSecurityAnswerUncheckedCreateWithoutUserInput>
  }

  export type UserSecurityAnswerCreateManyUserInputEnvelope = {
    data: UserSecurityAnswerCreateManyUserInput | UserSecurityAnswerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
  }

  export type DeviceUpdateManyWithWhereWithoutUserInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: StringFilter<"Device"> | string
    deviceId?: StringFilter<"Device"> | string
    userId?: StringFilter<"Device"> | string
  }

  export type UserSecurityAnswerUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSecurityAnswerWhereUniqueInput
    update: XOR<UserSecurityAnswerUpdateWithoutUserInput, UserSecurityAnswerUncheckedUpdateWithoutUserInput>
    create: XOR<UserSecurityAnswerCreateWithoutUserInput, UserSecurityAnswerUncheckedCreateWithoutUserInput>
  }

  export type UserSecurityAnswerUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSecurityAnswerWhereUniqueInput
    data: XOR<UserSecurityAnswerUpdateWithoutUserInput, UserSecurityAnswerUncheckedUpdateWithoutUserInput>
  }

  export type UserSecurityAnswerUpdateManyWithWhereWithoutUserInput = {
    where: UserSecurityAnswerScalarWhereInput
    data: XOR<UserSecurityAnswerUpdateManyMutationInput, UserSecurityAnswerUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSecurityAnswerScalarWhereInput = {
    AND?: UserSecurityAnswerScalarWhereInput | UserSecurityAnswerScalarWhereInput[]
    OR?: UserSecurityAnswerScalarWhereInput[]
    NOT?: UserSecurityAnswerScalarWhereInput | UserSecurityAnswerScalarWhereInput[]
    id?: StringFilter<"UserSecurityAnswer"> | string
    userId?: StringFilter<"UserSecurityAnswer"> | string
    questionId?: StringFilter<"UserSecurityAnswer"> | string
    answerHash?: StringFilter<"UserSecurityAnswer"> | string
    createdAt?: DateTimeFilter<"UserSecurityAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"UserSecurityAnswer"> | Date | string
  }

  export type UserCreateWithoutDevicesInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    passcode: string
    alternativeEmail?: string | null
    alternativePhoneNumber: string
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SecurityAnswers?: UserSecurityAnswerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    passcode: string
    alternativeEmail?: string | null
    alternativePhoneNumber: string
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SecurityAnswers?: UserSecurityAnswerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    alternativeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    alternativePhoneNumber?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SecurityAnswers?: UserSecurityAnswerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    alternativeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    alternativePhoneNumber?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SecurityAnswers?: UserSecurityAnswerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserSecurityAnswerCreateWithoutQuestionInput = {
    id?: string
    answerHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSecurityAnswersInput
  }

  export type UserSecurityAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    userId: string
    answerHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSecurityAnswerCreateOrConnectWithoutQuestionInput = {
    where: UserSecurityAnswerWhereUniqueInput
    create: XOR<UserSecurityAnswerCreateWithoutQuestionInput, UserSecurityAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type UserSecurityAnswerCreateManyQuestionInputEnvelope = {
    data: UserSecurityAnswerCreateManyQuestionInput | UserSecurityAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type UserSecurityAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: UserSecurityAnswerWhereUniqueInput
    update: XOR<UserSecurityAnswerUpdateWithoutQuestionInput, UserSecurityAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserSecurityAnswerCreateWithoutQuestionInput, UserSecurityAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type UserSecurityAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: UserSecurityAnswerWhereUniqueInput
    data: XOR<UserSecurityAnswerUpdateWithoutQuestionInput, UserSecurityAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type UserSecurityAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: UserSecurityAnswerScalarWhereInput
    data: XOR<UserSecurityAnswerUpdateManyMutationInput, UserSecurityAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserCreateWithoutSecurityAnswersInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    passcode: string
    alternativeEmail?: string | null
    alternativePhoneNumber: string
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Devices?: DeviceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSecurityAnswersInput = {
    id?: string
    name: string
    email: string
    phoneNumber: string
    passcode: string
    alternativeEmail?: string | null
    alternativePhoneNumber: string
    accountNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSecurityAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSecurityAnswersInput, UserUncheckedCreateWithoutSecurityAnswersInput>
  }

  export type SecurityQuestionCreateWithoutAnswersInput = {
    id?: string
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecurityQuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    question: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecurityQuestionCreateOrConnectWithoutAnswersInput = {
    where: SecurityQuestionWhereUniqueInput
    create: XOR<SecurityQuestionCreateWithoutAnswersInput, SecurityQuestionUncheckedCreateWithoutAnswersInput>
  }

  export type UserUpsertWithoutSecurityAnswersInput = {
    update: XOR<UserUpdateWithoutSecurityAnswersInput, UserUncheckedUpdateWithoutSecurityAnswersInput>
    create: XOR<UserCreateWithoutSecurityAnswersInput, UserUncheckedCreateWithoutSecurityAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSecurityAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSecurityAnswersInput, UserUncheckedUpdateWithoutSecurityAnswersInput>
  }

  export type UserUpdateWithoutSecurityAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    alternativeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    alternativePhoneNumber?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Devices?: DeviceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSecurityAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    passcode?: StringFieldUpdateOperationsInput | string
    alternativeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    alternativePhoneNumber?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SecurityQuestionUpsertWithoutAnswersInput = {
    update: XOR<SecurityQuestionUpdateWithoutAnswersInput, SecurityQuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<SecurityQuestionCreateWithoutAnswersInput, SecurityQuestionUncheckedCreateWithoutAnswersInput>
    where?: SecurityQuestionWhereInput
  }

  export type SecurityQuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: SecurityQuestionWhereInput
    data: XOR<SecurityQuestionUpdateWithoutAnswersInput, SecurityQuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type SecurityQuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityQuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateManyUserInput = {
    id?: string
    deviceId: string
  }

  export type UserSecurityAnswerCreateManyUserInput = {
    id?: string
    questionId: string
    answerHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
  }

  export type DeviceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
  }

  export type UserSecurityAnswerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: SecurityQuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type UserSecurityAnswerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSecurityAnswerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answerHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSecurityAnswerCreateManyQuestionInput = {
    id?: string
    userId: string
    answerHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSecurityAnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answerHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSecurityAnswersNestedInput
  }

  export type UserSecurityAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answerHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSecurityAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answerHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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