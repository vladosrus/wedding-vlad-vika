'use client';
import { memo, useMemo } from 'react';
import { Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

/**
 * Компонент `CustomOverlayLink` представляет собой невидимую ссылку-оверлей,
 * которая занимает всю доступную область и используется для создания кликабельных зон.
 * Он поддерживает как внутренние, так и внешние ссылки, а также возможность открытия
 * ссылок в новой вкладке.
 *
 * `ВАЖНО!` У родительского компонента обязательно должен быть `position='relative'` или другой отличный от 'static'
 *
 * param {string} `link` - URL ссылки. Может быть как внутренним (например,
 * `/about`), так и внешним (например, `https://example.com`).
 *
 * param {string} `title` - Текст всплывающей подсказки (атрибут `title`), который
 * отображается при наведении на ссылку.
 *
 * param {boolean} `[isExternal=false]` - Если true, ссылка считается внешней и будет
 * открыта в новой вкладке.
 *
 * param {...object} `props` - Дополнительные свойства, передаваемые в компонент `Link`.
 *
 * @example
 * // Использование в карточке
 * <Box pos="relative" w="200px" h="100px" bg="gray.200">
 *   <CustomOverlayLink link="/about" title="Подробнее" />
 *   <Text>Карточка с ссылкой</Text>
 * </Box>
 */
const CustomOverlayLink = ({ link, title, isExternal = false, ...props }) => {
  const isHttp = useMemo(() => link.startsWith('http'), [link]);

  return (
    <Box
      as={isHttp || isExternal ? Link : NextLink}
      href={link}
      target={isHttp || isExternal ? '_blank' : '_self'}
      title={title}
      pos="absolute"
      top="0"
      left="0"
      w="full"
      h="full"
      opacity="0"
      zIndex="100"
      {...props}
    >
      {title}
    </Box>
  );
};

export default memo(CustomOverlayLink);
