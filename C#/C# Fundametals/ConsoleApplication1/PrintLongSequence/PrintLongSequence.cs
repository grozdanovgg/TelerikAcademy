﻿using System;

class PrintSequence
{
    static void Main()
    {
        for (int x = 2; x < 1002; x++)
        {
            if (x % 2 == 0)
                Console.WriteLine(x);
            else
            {
                Console.WriteLine(x * -1);
            }
        }
    }
}