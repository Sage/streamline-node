declare namespace NodeJS {
    export interface Domain extends Events {
        bind(_: Streamline._): any;
    }
}
declare module "cluster" {
    import { _ } from "streamline-runtime";
    import * as child from "child_process";
    import * as events from "events";
    import * as net from "net";
    export interface Worker {
        send(message: any, sendHandle?: any, _?: _): void;
    }
}
declare module "zlib" {
    import { _ } from "streamline-runtime";
    import * as stream from "stream";
    export function deflate(buf: InputType, _: _): Buffer;
    export function deflate(buf: InputType, options: ZlibOptions, _: _): Buffer;
    export function deflateRaw(buf: InputType, _: _): Buffer;
    export function deflateRaw(buf: InputType, options: ZlibOptions, _: _): Buffer;
    export function gzip(buf: InputType, _: _): Buffer;
    export function gzip(buf: InputType, options: ZlibOptions, _: _): Buffer;
    export function gunzip(buf: InputType, _: _): Buffer;
    export function gunzip(buf: InputType, options: ZlibOptions, _: _): Buffer;
    export function inflate(buf: InputType, _: _): Buffer;
    export function inflate(buf: InputType, options: ZlibOptions, _: _): Buffer;
    export function inflateRaw(buf: InputType, _: _): Buffer;
    export function inflateRaw(buf: InputType, options: ZlibOptions, _: _): Buffer;
    export function unzip(buf: InputType, _: _): Buffer;
    export function unzip(buf: InputType, options: ZlibOptions, _: _): Buffer;
}
declare module "child_process" {
    import { _ } from "streamline-runtime";
    import * as events from "events";
    import * as stream from "stream";
    import * as net from "net";
    export interface ChildProcess extends events.EventEmitter {
        send(message: any, _?: _): void;
        send(message: any, sendHandle?: net.Socket | net.Server, _?: _): void;
        send(message: any, sendHandle?: net.Socket | net.Server, options?: MessageOptions, _?: _): void;
    }
    export function exec(command: string, _?: _): string;
    export function exec(command: string, _?: [_]): [string, string];
    export function exec(command: string, options: { encoding: "buffer" | null } & ExecOptions, _?: _): Buffer;
    export function exec(command: string, options: { encoding: "buffer" | null } & ExecOptions, _?: [_]): [Buffer, Buffer];
    export function exec(command: string, options: { encoding: BufferEncoding } & ExecOptions, _?: _): string;
    export function exec(command: string, options: { encoding: BufferEncoding } & ExecOptions, _?: [_]): [string, string];
    export function exec(command: string, options: { encoding: string } & ExecOptions, _?: _): string | Buffer;
    export function exec(command: string, options: { encoding: string } & ExecOptions, _?: [_]): [string | Buffer, string | Buffer];
    export function exec(command: string, options: ExecOptions, _?: _): string;
    export function exec(command: string, options: ExecOptions, _?: [_]): [string, string];
    export function exec(command: string, options: ({ encoding?: string | null } & ExecOptions) | undefined | null, _?: _): string | Buffer;
    export function exec(command: string, options: ({ encoding?: string | null } & ExecOptions) | undefined | null, _?: [_]): [string | Buffer, string | Buffer];
    export function execFile(file: string, _: _): string;
    export function execFile(file: string, _: [_]): [string, string];
    export function execFile(file: string, args: string[] | undefined | null, _: _): string;
    export function execFile(file: string, args: string[] | undefined | null, _: [_]): [string, string];
    export function execFile(file: string, options: ExecFileOptionsWithBufferEncoding, _: _): Buffer;
    export function execFile(file: string, options: ExecFileOptionsWithBufferEncoding, _: [_]): [Buffer, Buffer];
    export function execFile(file: string, args: string[] | undefined | null, options: ExecFileOptionsWithBufferEncoding, _: _): Buffer;
    export function execFile(file: string, args: string[] | undefined | null, options: ExecFileOptionsWithBufferEncoding, _: [_]): [Buffer, Buffer];
    export function execFile(file: string, options: ExecFileOptionsWithStringEncoding, _: _): string;
    export function execFile(file: string, options: ExecFileOptionsWithStringEncoding, _: [_]): [string, string];
    export function execFile(file: string, args: string[] | undefined | null, options: ExecFileOptionsWithStringEncoding, _: _): string;
    export function execFile(file: string, args: string[] | undefined | null, options: ExecFileOptionsWithStringEncoding, _: [_]): [string, string];
    export function execFile(file: string, options: ExecFileOptionsWithOtherEncoding, _: _): string | Buffer;
    export function execFile(file: string, options: ExecFileOptionsWithOtherEncoding, _: [_]): [string | Buffer, string | Buffer];
    export function execFile(file: string, args: string[] | undefined | null, options: ExecFileOptionsWithOtherEncoding, _: _): string | Buffer;
    export function execFile(file: string, args: string[] | undefined | null, options: ExecFileOptionsWithOtherEncoding, _: [_]): [string | Buffer, string | Buffer];
    export function execFile(file: string, options: ExecFileOptions, _: _): string;
    export function execFile(file: string, options: ExecFileOptions, _: [_]): [string, string];
    export function execFile(file: string, args: string[] | undefined | null, options: ExecFileOptions, _: _): string;
    export function execFile(file: string, args: string[] | undefined | null, options: ExecFileOptions, _: [_]): [string, string];
}
declare module "dns" {
    import { _ } from "streamline-runtime";
    export function lookup(hostname: string, family: number, _: _): string;
    export function lookup(hostname: string, family: number, _: [_]): [string, number];
    export function lookup(hostname: string, options: LookupOneOptions, _: _): string;
    export function lookup(hostname: string, options: LookupOneOptions, _: [_]): [string, number];
    export function lookup(hostname: string, options: LookupAllOptions, _: _): LookupAddress[];
    export function lookup(hostname: string, options: LookupOptions, _: _): string | LookupAddress[];
    export function lookup(hostname: string, options: LookupOptions, _: [_]): [string | LookupAddress[], number];
    export function lookup(hostname: string, _: _): string;
    export function lookup(hostname: string, _: [_]): [string, number];
    export function lookupService(address: string, port: number, _: _): string;
    export function lookupService(address: string, port: number, _: [_]): [string, string];
    export function resolve(hostname: string, _: _): string[];
    export function resolve(hostname: string, rrtype: "A", _: _): string[];
    export function resolve(hostname: string, rrtype: "AAAA", _: _): string[];
    export function resolve(hostname: string, rrtype: "ANY", _: _): AnyRecord[];
    export function resolve(hostname: string, rrtype: "CNAME", _: _): string[];
    export function resolve(hostname: string, rrtype: "MX", _: _): MxRecord[];
    export function resolve(hostname: string, rrtype: "NAPTR", _: _): NaptrRecord[];
    export function resolve(hostname: string, rrtype: "NS", _: _): string[];
    export function resolve(hostname: string, rrtype: "PTR", _: _): string[];
    export function resolve(hostname: string, rrtype: "SOA", _: _): SoaRecord;
    export function resolve(hostname: string, rrtype: "SRV", _: _): SrvRecord[];
    export function resolve(hostname: string, rrtype: "TXT", _: _): string[][];
    export function resolve(hostname: string, rrtype: string, _: _): string[] | MxRecord[] | NaptrRecord[] | SoaRecord | SrvRecord[] | string[][] | AnyRecord[];
    export function resolve4(hostname: string, _: _): string[];
    export function resolve4(hostname: string, options: ResolveWithTtlOptions, _: _): RecordWithTtl[];
    export function resolve4(hostname: string, options: ResolveOptions, _: _): string[] | RecordWithTtl[];
    export function resolve6(hostname: string, _: _): string[];
    export function resolve6(hostname: string, options: ResolveWithTtlOptions, _: _): RecordWithTtl[];
    export function resolve6(hostname: string, options: ResolveOptions, _: _): string[] | RecordWithTtl[];
    export function resolveCname(hostname: string, _: _): string[];
    export function resolveMx(hostname: string, _: _): MxRecord[];
    export function resolveNaptr(hostname: string, _: _): NaptrRecord[];
    export function resolveNs(hostname: string, _: _): string[];
    export function resolvePtr(hostname: string, _: _): string[];
    export function resolveSoa(hostname: string, _: _): SoaRecord;
    export function resolveSrv(hostname: string, _: _): SrvRecord[];
    export function resolveTxt(hostname: string, _: _): string[][];
    export function resolveAny(hostname: string, _: _): AnyRecord[];
    export function reverse(ip: string, _: _): string[];
}
declare module "net" {
    import { _ } from "streamline-runtime";
    import * as stream from "stream";
    import * as events from "events";
    import * as dns from "dns";
    export interface Server {
        getConnections(_: _): number;
    }
}
declare module "dgram" {
    import { _ } from "streamline-runtime";
    import * as events from "events";
    import * as dns from "dns";
    export interface Socket {
        send(msg: Buffer | string | Uint8Array | any[], port: number, address?: string, _?: _): number;
        send(msg: Buffer | string | Uint8Array, offset: number, length: number, port: number, address?: string, _?: _): number;
    }
}
declare module "fs" {
    import { _ } from "streamline-runtime";
    import * as stream from "stream";
    import * as events from "events";
    import { URL } from "url";
    export function rename(oldPath: PathLike, newPath: PathLike, _: _): void;
    export function truncate(path: PathLike, len: number | undefined | null, _: _): void;
    export function truncate(path: PathLike, _: _): void;
    export function ftruncate(fd: number, len: number | undefined | null, _: _): void;
    export function ftruncate(fd: number, _: _): void;
    export function chown(path: PathLike, uid: number, gid: number, _: _): void;
    export function fchown(fd: number, uid: number, gid: number, _: _): void;
    export function lchown(path: PathLike, uid: number, gid: number, _: _): void;
    export function chmod(path: PathLike, mode: string | number, _: _): void;
    export function fchmod(fd: number, mode: string | number, _: _): void;
    export function lchmod(path: PathLike, mode: string | number, _: _): void;
    export function stat(path: PathLike, _: _): Stats;
    export function fstat(fd: number, _: _): Stats;
    export function lstat(path: PathLike, _: _): Stats;
    export function link(existingPath: PathLike, newPath: PathLike, _: _): void;
    export function symlink(target: PathLike, path: PathLike, type: symlink.Type | undefined | null, _: _): void;
    export function symlink(target: PathLike, path: PathLike, _: _): void;
    export function readlink(path: PathLike, options: { encoding?: BufferEncoding | null } | BufferEncoding | undefined | null, _: _): string;
    export function readlink(path: PathLike, options: { encoding: "buffer" } | "buffer", _: _): Buffer;
    export function readlink(path: PathLike, options: { encoding?: string | null } | string | undefined | null, _: _): string | Buffer;
    export function readlink(path: PathLike, _: _): string;
    export function realpath(path: PathLike, options: { encoding?: BufferEncoding | null } | BufferEncoding | undefined | null, _: _): string;
    export function realpath(path: PathLike, options: { encoding: "buffer" } | "buffer", _: _): Buffer;
    export function realpath(path: PathLike, options: { encoding?: string | null } | string | undefined | null, _: _): string | Buffer;
    export function realpath(path: PathLike, _: _): string;
    export function unlink(path: PathLike, _: _): void;
    export function rmdir(path: PathLike, _: _): void;
    export function mkdir(path: PathLike, mode: number | string | undefined | null, _: _): void;
    export function mkdir(path: PathLike, _: _): void;
    export function mkdtemp(prefix: string, options: { encoding?: BufferEncoding | null } | BufferEncoding | undefined | null, _: _): string;
    export function mkdtemp(prefix: string, options: "buffer" | { encoding: "buffer" }, _: _): Buffer;
    export function mkdtemp(prefix: string, options: { encoding?: string | null } | string | undefined | null, _: _): string | Buffer;
    export function mkdtemp(prefix: string, _: _): string;
    export function readdir(path: PathLike, options: { encoding: BufferEncoding | null } | BufferEncoding | undefined | null, _: _): string[];
    export function readdir(path: PathLike, options: { encoding: "buffer" } | "buffer", _: _): Buffer[];
    export function readdir(path: PathLike, options: { encoding?: string | null } | string | undefined | null, _: _): string[] | Buffer[];
    export function readdir(path: PathLike, _: _): string[];
    export function close(fd: number, _: _): void;
    export function open(path: PathLike, flags: string | number, mode: string | number | undefined | null, _: _): number;
    export function open(path: PathLike, flags: string | number, _: _): number;
    export function utimes(path: PathLike, atime: string | number | Date, mtime: string | number | Date, _: _): void;
    export function futimes(fd: number, atime: string | number | Date, mtime: string | number | Date, _: _): void;
    export function fsync(fd: number, _: _): void;
    export function write<TBuffer extends Buffer | Uint8Array>(fd: number, buffer: TBuffer, offset: number | undefined | null, length: number | undefined | null, position: number | undefined | null, _: _): number;
    export function write<TBuffer extends Buffer | Uint8Array>(fd: number, buffer: TBuffer, offset: number | undefined | null, length: number | undefined | null, position: number | undefined | null, _: [_]): [number, TBuffer];
    export function write<TBuffer extends Buffer | Uint8Array>(fd: number, buffer: TBuffer, offset: number | undefined | null, length: number | undefined | null, _: _): number;
    export function write<TBuffer extends Buffer | Uint8Array>(fd: number, buffer: TBuffer, offset: number | undefined | null, length: number | undefined | null, _: [_]): [number, TBuffer];
    export function write<TBuffer extends Buffer | Uint8Array>(fd: number, buffer: TBuffer, offset: number | undefined | null, _: _): number;
    export function write<TBuffer extends Buffer | Uint8Array>(fd: number, buffer: TBuffer, offset: number | undefined | null, _: [_]): [number, TBuffer];
    export function write<TBuffer extends Buffer | Uint8Array>(fd: number, buffer: TBuffer, _: _): number;
    export function write<TBuffer extends Buffer | Uint8Array>(fd: number, buffer: TBuffer, _: [_]): [number, TBuffer];
    export function write(fd: number, string: any, position: number | undefined | null, encoding: string | undefined | null, _: _): number;
    export function write(fd: number, string: any, position: number | undefined | null, encoding: string | undefined | null, _: [_]): [number, string];
    export function write(fd: number, string: any, position: number | undefined | null, _: _): number;
    export function write(fd: number, string: any, position: number | undefined | null, _: [_]): [number, string];
    export function write(fd: number, string: any, _: _): number;
    export function write(fd: number, string: any, _: [_]): [number, string];
    export function read<TBuffer extends Buffer | Uint8Array>(fd: number, buffer: TBuffer, offset: number, length: number, position: number | null, _?: _): number;
    export function read<TBuffer extends Buffer | Uint8Array>(fd: number, buffer: TBuffer, offset: number, length: number, position: number | null, _?: [_]): [number, TBuffer];
    export function readFile(path: PathLike | number, options: { encoding?: null; flag?: string; } | undefined | null, _: _): Buffer;
    export function readFile(path: PathLike | number, options: { encoding: string; flag?: string; } | string, _: _): string;
    export function readFile(path: PathLike | number, options: { encoding?: string | null; flag?: string; } | string | undefined | null, _: _): string | Buffer;
    export function readFile(path: PathLike | number, _: _): Buffer;
    export function writeFile(path: PathLike | number, data: any, options: { encoding?: string | null; mode?: number | string; flag?: string; } | string | undefined | null, _: _): void;
    export function writeFile(path: PathLike | number, data: any, _: _): void;
    export function appendFile(file: PathLike | number, data: any, options: { encoding?: string | null, mode?: string | number, flag?: string } | string | undefined | null, _: _): void;
    export function appendFile(file: PathLike | number, data: any, _: _): void;
    export function access(path: PathLike, mode: number | undefined, _: _): void;
    export function access(path: PathLike, _: _): void;
    export function fdatasync(fd: number, _: _): void;
    export function copyFile(src: PathLike, dest: PathLike, _: _): void;
    export function copyFile(src: PathLike, dest: PathLike, flags: number, _: _): void;
}
declare module "tls" {
    import { _ } from "streamline-runtime";
    import * as crypto from "crypto";
    import * as dns from "dns";
    import * as net from "net";
    import * as stream from "stream";
    export interface TLSSocket {
        renegotiate(options: { rejectUnauthorized?: boolean, requestCert?: boolean }, _: _): void;
    }
    /*export interface Server {
        addListener(event: "tlsClientError", _: _): TLSSocket;
        emit(event: "newSession", sessionId: any, sessionData: any, _: _): Buffer;
        emit(event: "resumeSession", sessionId: any, _: _): any;
        on(event: "tlsClientError", _: _): TLSSocket;
        once(event: "tlsClientError", _: _): TLSSocket;
        prependListener(event: "tlsClientError", _: _): TLSSocket;
        prependOnceListener(event: "tlsClientError", _: _): TLSSocket;
    }*/
}
declare module "crypto" {
    import { _ } from "streamline-runtime";
    export function pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string, _: _): Buffer;
    export function randomBytes(size: number, _: _): Buffer;
    export function pseudoRandomBytes(size: number, _: _): Buffer;
    export function randomFill(buffer: Buffer, _: _): Buffer;
    export function randomFill(buffer: Uint8Array, _: _): Uint8Array;
    export function randomFill(buffer: Buffer, offset: number, _: _): Buffer;
    export function randomFill(buffer: Uint8Array, offset: number, _: _): Uint8Array;
    export function randomFill(buffer: Buffer, offset: number, size: number, _: _): Buffer;
    export function randomFill(buffer: Uint8Array, offset: number, size: number, _: _): Uint8Array;
}
/*declare module "stream" {
    import { _ } from "streamline-runtime";
    import * as events from "events";
    namespace internal {
        export interface Readable extends Stream {
            _destroy(error: Error | null, _: _): void;
        }
        export interface Writable extends Stream {
            _write(chunk: any, encoding: string, _: _): void;
            _writev?(chunks: Array<{ chunk: any, encoding: string }>, _: _): void;
            _destroy(error: Error | null, _: _): void;
        }
        export interface Duplex extends Readable {
            _write(chunk: any, encoding: string, _: _): void;
            _writev?(chunks: Array<{ chunk: any, encoding: string }>, _: _): void;
            _destroy(error: Error | null, _: _): void;
        }
    }
}*/
declare module "domain" {
    import { _ } from "streamline-runtime";
    import * as events from "events";
    export interface Domain extends events.EventEmitter {
        bind(_: _): any;
    }
}
declare module "http2" {
    import { _ } from "streamline-runtime";
    import * as events from "events";
    import * as fs from "fs";
    import * as net from "net";
    import * as stream from "stream";
    import * as tls from "tls";
    import * as url from "url";
    import { IncomingHttpHeaders, OutgoingHttpHeaders } from "http";
    /*export interface Http2Session extends events.EventEmitter {
        addListener(event: "goaway", _: _): number;
        addListener(event: "goaway", _: [_]): [number, Buffer];
        addListener(event: "socketError", _: _): void;
        on(event: "goaway", _: _): number;
        on(event: "goaway", _: [_]): [number, Buffer];
        on(event: "socketError", _: _): void;
        once(event: "goaway", _: _): number;
        once(event: "goaway", _: [_]): [number, Buffer];
        once(event: "socketError", _: _): void;
        prependListener(event: "goaway", _: _): number;
        prependListener(event: "goaway", _: [_]): [number, Buffer];
        prependListener(event: "socketError", _: _): void;
        prependOnceListener(event: "goaway", _: _): number;
        prependOnceListener(event: "goaway", _: [_]): [number, Buffer];
        prependOnceListener(event: "socketError", _: _): void;
    }
    export interface Http2Server extends net.Server {
        addListener(event: "sessionError", _: _): void;
        addListener(event: "socketError", _: _): void;
        on(event: "sessionError", _: _): void;
        on(event: "socketError", _: _): void;
        once(event: "sessionError", _: _): void;
        once(event: "socketError", _: _): void;
        prependListener(event: "sessionError", _: _): void;
        prependListener(event: "socketError", _: _): void;
        prependOnceListener(event: "sessionError", _: _): void;
        prependOnceListener(event: "socketError", _: _): void;
    }
    export interface Http2SecureServer extends tls.Server {
        addListener(event: "sessionError", _: _): void;
        addListener(event: "socketError", _: _): void;
        on(event: "sessionError", _: _): void;
        on(event: "socketError", _: _): void;
        once(event: "sessionError", _: _): void;
        once(event: "socketError", _: _): void;
        prependListener(event: "sessionError", _: _): void;
        prependListener(event: "socketError", _: _): void;
        prependOnceListener(event: "sessionError", _: _): void;
        prependOnceListener(event: "socketError", _: _): void;
    }*/
    export interface Http2ServerResponse {
        write(chunk: string | Buffer, _?: _): void;
        write(chunk: string | Buffer, encoding?: string, _?: _): void;
        createPushResponse(headers: OutgoingHttpHeaders, _: _): Http2ServerResponse;
    }
}