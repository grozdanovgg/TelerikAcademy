﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StringBuilderSubstring
{
    ////    Problem 1. StringBuilder.Substring
    //      Implement an extension method Substring(int index, int length) 
    //      for the class StringBuilder that returns new StringBuilder and has
    //      the same functionality as Substring in the class String.
    public static class StringBuilderExtensions
    {
        public static StringBuilder Substring(this StringBuilder text, int index, int length)
        {        

            var result = new StringBuilder();

            for (int i = index; i < index+length; i++)
            {
                result.Append(text[i]);
            }

            return result; 
        }
    }
}
