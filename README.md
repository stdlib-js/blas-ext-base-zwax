<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zwax

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multiply each element in a double-precision complex floating-point strided array `x` by a scalar constant and assign the results to elements in a double-precision complex floating-point strided array `w`.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:wax" align="center" raw="\mathbf{w} = \alpha \cdot \mathbf{x}" alt="Equation for wax operation."> -->

```math
\mathbf{w} = \alpha \cdot \mathbf{x}
```

<!-- </equation> -->

This API is complementary to the package [`@stdlib/blas-base/zscal`][@stdlib/blas/base/zscal], which performs an in-place update.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import zwax from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-zwax@deno/mod.js';
```

#### zwax( N, alpha, x, strideX, w, strideW )

Multiplies each element in a double-precision complex floating-point strided array `x` by a scalar constant and assigns the results to elements in a double-precision complex floating-point strided array `w`.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@deno/mod.js';

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var alpha = new Complex128( 5.0, 3.0 );

zwax( x.length, alpha, x, 1, w, 1 );
// w => <Complex128Array>[ -1.0, 13.0, 3.0, 29.0, 7.0, 45.0, 11.0, 61.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length for `x`.
-   **w**: output [`Complex128Array`][@stdlib/array/complex128].
-   **strideW**: stride length for `w`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to multiply every other element in `x` by `alpha` and assign the results to every other element in `w`:

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@deno/mod.js';

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var alpha = new Complex128( 5.0, 3.0 );

zwax( 2, alpha, x, 2, w, 2 );
// w => <Complex128Array>[ -1.0, 13.0, 0.0, 0.0, 7.0, 45.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable max-len -->

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@deno/mod.js';

// Initial arrays...
var x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var w0 = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var w1 = new Complex128Array( w0.buffer, w0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

var alpha = new Complex128( 5.0, 3.0 );

zwax( 3, alpha, x1, 1, w1, 1 );
// w0 => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 3.0, 29.0, 7.0, 45.0, 11.0, 61.0 ]
```

#### zwax.ndarray( N, alpha, x, strideX, offsetX, w, strideW, offsetW )

Multiplies each element in a double-precision complex floating-point strided array `x` by a scalar constant and assigns the results to elements in a double-precision complex floating-point strided array `w` using alternative indexing semantics.

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@deno/mod.js';

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var alpha = new Complex128( 5.0, 3.0 );

zwax.ndarray( x.length, alpha, x, 1, 0, w, 1, 0 );
// w => <Complex128Array>[ -1.0, 13.0, 3.0, 29.0, 7.0, 45.0, 11.0, 61.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetW**: starting index for `w`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to multiply the last three elements of `x` by `alpha` and assign the results to the last three elements of `w`:

<!-- eslint-disable max-len -->

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@deno/mod.js';

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var alpha = new Complex128( 5.0, 3.0 );

zwax.ndarray( 3, alpha, x, 1, x.length-3, w, 1, w.length-3 );
// w => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 7.0, 45.0, 11.0, 61.0, 15.0, 77.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `w` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@deno/mod.js';
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@deno/mod.js';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@deno/mod.js';
import zwax from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-zwax@deno/mod.js';

var xbuf = discreteUniform( 20, -100, 100, {
    'dtype': 'float64'
});
var wbuf = discreteUniform( 20, -100, 100, {
    'dtype': 'float64'
});
var x = new Complex128Array( xbuf.buffer );
var w = new Complex128Array( wbuf.buffer );
var alpha = new Complex128( 5.0, 3.0 );

zwax( x.length, alpha, x, 1, w, 1 );
logEach( '%s', w );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-zwax.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-zwax

[test-image]: https://github.com/stdlib-js/blas-ext-base-zwax/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-zwax/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-zwax/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-zwax?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-zwax.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-zwax/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-zwax/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-zwax/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-zwax/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-zwax/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-zwax/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-zwax/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-zwax/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-zwax/main/LICENSE

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128/tree/deno

[@stdlib/blas/base/zscal]: https://github.com/stdlib-js/blas-base-zscal/tree/deno

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
