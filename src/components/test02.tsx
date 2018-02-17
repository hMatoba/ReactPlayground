import * as React from "react";

// コメントについて
export const Test02 = () => <h1>
foo
{/* 正しい書き方 */}
{// →の閉じカッコがコメント化されてしまうので、次行の閉じカッコでこのコメントが終わる}
}
bar
{
// 次行に閉じカッコがあるので、コメント化されるのはこの行だけ
}
</h1>;

// HTMLエンティティ
const RAQUO = '\u00bb'; // ⋗
export const Test02_01 = () => <div>
    <div>{"8 > 1"}</div>
    <div>{"8 &gt; 1"}</div>
    <div>{"8 \u003E 1"}</div>
    <div>8 {RAQUO} 1</div>
    <div></div>
</div>;

// XSS対策
const EVIL = "<script>alert('2')</script>";
export const Test02_02 = () => <div>
    <div>check1(in curly bracket) => {"<script>alert('1');</script>"}</div>
    <div>check2 {EVIL}</div>
    <div>check3(raw TSX) => <script>alert('3');</script></div>
    <div>check4(TSX) => {<script>alert('4');</script>}</div>
</div>;


// JSX的なHTMLの代替記法
export const Test02_03 = () => <div>
    <select defaultValue={["stay", "trouble"]} multiple={true}>
        <option value="stay">とどまるべきか</option>
        <option value="move">去るべきか</option>
        <option value="trouble">とどまれば災いあり</option>
    </select>
</div>;
