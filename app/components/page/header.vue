<template>
  <header class="@container">
    <div
      class="@[86.8rem]:max-w-[calc(124rem+12rem)] @[86.8rem]:px-60 @[124rem]:pt-120 @[86.8rem]:pt-60 mx-auto w-full px-28 pt-48"
    >
      <div
        class="@[86.8rem]:flex @[86.8rem]:mb-60 @[124rem]:mb-0 @[86.8rem]:gap-[6.6rem] @[86.8rem]:items-center"
      >
        <div
          class="@[86.8rem]:max-w-[32.6rem] @[124rem]:max-w-[50.2rem] @[124rem]:mx-0 @[50rem]:max-w-[42rem] @[86.8rem]:text-left mx-auto max-w-[31.9rem] text-center"
        >
          <span
            class="@[56rem]:tracking-[.273rem] first-line: @[86.8rem]text-[2.1rem] @[86.8rem]:leading-[2.1rem] mb-28 inline-block text-[1.6rem] font-bold uppercase leading-[1.6rem] tracking-[.208rem] text-[#61908E]"
          >
            eyebrow ipsum
          </span>

          <AtomH1 class="@[124rem]:mb-[4rem] mb-48"
            >Lorem <br class="@[86.8rem]:hidden" />
            ipsum</AtomH1
          >

          <NuxtImg
            class="@[86.8rem]:hidden mx-auto mb-48"
            :width="319"
            :height="242"
            format="webp"
            alt="Lorem ipsum"
            src="img/header.png"
          />

          <p
            class="text-emerald @[124rem]:leading-[3rem] @[124rem]:block @[86.8rem]:hidden @[124rem]:text-[2.1rem] font-medium leading-[2.2rem]"
          >
            Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>

        <NuxtImg
          class="@[86.8rem]:block @[86.8rem]:ml-auto @[124rem]:max-w-none @[124rem]:max-h-none @[86.8rem]:m-0 @[124rem]:mb-0 mx-auto mb-48 hidden max-h-[27.2rem] max-w-[35.9rem]"
          :width="422"
          :height="322"
          format="webp"
          alt="Lorem ipsum"
          src="img/header.png"
        />
      </div>
      <p
        class="text-emerald @[124rem]:hidden @[86.8rem]:block @[86.8rem]:mb-0 @[86.8rem]:ml-auto mx-auto mb-48 hidden max-w-[55rem] text-center text-[2.1rem] font-medium"
      >
        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod
        tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi.
      </p>
    </div>
  </header>
</template>
