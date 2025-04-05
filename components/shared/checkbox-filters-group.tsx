'use client';
import React, { useState } from 'react';
import { FilterCheckbox, IFilterCheckboxProps } from '../shared';
import { Input } from "@/components/ui";

interface IProps {
    title: string;
    items: IFilterCheckboxProps[];
    defaultItems: IFilterCheckboxProps[],
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string;
    className?: string;
}

export const CheckboxFiltersGroup = ({title, items, defaultItems, limit = 5, searchInputPlaceholder = "Поиск...", onChange, defaultValue, className}: IProps) => {
    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const list = showAll ?
        items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : defaultItems.slice(0, limit);

    const onChangeInput = (value: string) => {
        setSearchValue(value);
    };

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {
                showAll && (
                    <div className="mb-5">
                        <Input onChange={(e) => onChangeInput(e.target.value)} placeholder={searchInputPlaceholder} className="bg-gray-50 border-none"/>
                    </div>
                )
            }

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox
                        key={String(item.value)}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        onCheckedChange={(ids) => console.log(ids)}
                        checked={false}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    );
};