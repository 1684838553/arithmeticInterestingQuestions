/**
https://leetcode-cn.com/problems/add-two-numbers/

给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例 1：
链表图片：https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/01/02/addtwonumber1.jpg

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
示例 2：

输入：l1 = [0], l2 = [0]
输出：[0]
示例 3：

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]


提示：

每个链表中的节点数在范围 [1, 100] 内
0 <= Node.val <= 9
题目数据保证列表表示的数字不含前导零

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 解题思路：两个链表的值相加，小于10，直接拿结果，否则，
 * 进一位，该节点取余 carry
 */

/**
 * 方法一
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // 进位
    let carry = 0
    let root = new ListNode()
    let head = root

    while (l1 || l2) {

        // 求和 l1.val + l2.val + carry == sum 
        let sum = 0

        if (l1) {
            sum += l1.val
            l1 = l1.next
        }

        if (l2) {
            sum += l2.val
            l2 = l2.next
        }

        sum += carry

        head.next = new ListNode(sum % 10)
        carry = Math.floor(sum / 10)

        head = head.next
    }

    if (carry) {
        head.next = new ListNode(carry)
    }

    return root.next
};

// 方法二
var addTwoNumbers = function (l1, l2) {
    let carry = 0
    let arr = []

    while (l1 || l2) {
        let total = 0
        if (!l1) {
            l1 = new ListNode(0)
        }

        if (!l2) {
            l2 = new ListNode(0)
        }

        total = l1.val + l2.val + carry
        carry = 0

        if (total > 9) {
            carry = Math.floor(total / 10)
            let newNum = total % 10
            arr.push(newNum)
        } else {
            arr.push(total)
        }

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    if (carry) {
        arr.push(carry)
    }

    let root = null
    if (arr.length) {
        let rootVal = arr[0]
        root = new ListNode(rootVal)

        let head = root
        for (let i = 1; i < arr.length; i++) {
            head.next = new ListNode(arr[i])
            head = head.next
        }
    }
    return root
};
